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

        <el-form-item prop="userName">
          <el-input v-model="param.userName"
            @keyup.enter="submitForm()">

            <template #prepend>
                <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
            v-model="param.password"
            @keyup.enter="submitForm()">
            <template #prepend>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
            class="loginBtn"
            @click="submitForm">登录</el-button>
        </el-form-item>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>

  </div>
</template>

<script>
import { ref, reactive,defineComponent } from 'vue';
// import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

export default defineComponent({
  setup() {
    const router = useRouter();
    const param = reactive({
      userName: 'admin',
      password: '123123',
    });

    const rules = {
      userName: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    };
    const loginForm = ref(null);
    const submitForm = () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          ElMessage.success('登录成功');
          localStorage.setItem('ms_username', param.username);
          router.push('/');
        } else {
          ElMessage.error('登录成功');
        }
      });
    };

    // const store = useStore();
    // store.commit('clearTags');

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
    .title{
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
