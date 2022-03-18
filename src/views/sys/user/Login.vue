<template>
  <div class="loginContainer">

    <div class="loginFormArea">
      <img src="static/images/logo.png"
        class="logo" />
      <p class="title">管理系统</p>

      <el-form ref="loginForm"
        class="loginForm"
        :rules="rules"
        :model="param"
        label-width="0px">

        <el-form-item prop="loginName">
          <el-input v-model="param.loginName"
            @keyup.enter="submitForm()">

            <template #prepend>
              <el-icon>
                <user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
            v-model="param.password"
            @keyup.enter="submitForm()">
            <template #prepend>
              <el-icon>
                <key />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
            class="loginBtn"
            @click="submitForm">登录</el-button>
        </el-form-item>
        <p class="login-tips">Tips : 有2个用户（admin、user1）,密码随便填。</p>
      </el-form>
    </div>

  </div>
</template>

<script>
import { ref, reactive, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { fetchLoginUserData } from "@/api/mock.js";
import { User, Key } from "@element-plus/icons-vue";

export default defineComponent({
  components: { User, Key },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const param = reactive({
      loginName: "admin",
      password: "123123",
    });

    const rules = {
      loginName: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };

    const loginForm = ref(null);

    const submitForm = async () => {
      await loginForm.value.validate();

      const user = await fetchLoginUserData(param);
      if (user) {
        ElMessage.success("登录成功");
        store.commit("base/setCurrentUserInfo", user);
        await store.dispatch("permission/getMenuList", user);
        gotoPage();
      } else {
        ElMessage.error("用户名或密码错误");
      }
    };
    const gotoPage = () => {
      if (route.query.redirectUrl) {
        router.replace(route.query.redirectUrl);
      } else {
        router.push("/");
      }
    };

    onMounted(() => {
      if (store.getters["base/isExistUser"]) {
        gotoPage();
      }
    });

    return {
      param,
      rules,
      loginForm,
      submitForm,
    };
  },
});
</script>

<style scoped lang="scss">
.loginContainer {
  width: 100%;
  height: 100%;
  background: url(/static/images/loginBg.png) repeat;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  .loginFormArea {
    width: 430px;
    border: 1px solid #e3e3e3;
    padding: 30px;
    height: 400px;
    box-shadow: 0 0 10px #e2e2e2;
    border-radius: 10px;
    text-align: center;
    .logo {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .loginBtn {
      display: block;
      width: 100%;
    }
  }
}
</style>
