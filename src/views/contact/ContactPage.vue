<script lang="ts" setup>
import { reactive, ref } from 'vue'
import HeaderLayout from '@/components/hearder/HeaderLayout.vue'
import FooterItem from '@/components/footer/FooterItem.vue'

import { sendFeedbackRequest } from '@/service/feedback/contact/index'

const btnText = ref('Submit')
const contactInfo = reactive({
  firstName: '',
  lastName: '',
  email: '',
  comment: ''
})

const submitForm = () => {
  if (btnText.value !== 'Submit') return
  const content = `${contactInfo.firstName},${contactInfo.lastName},${contactInfo.email},${contactInfo.comment}`
  sendFeedbackRequest({
    package_name: 'website_feedback',
    content: encodeURIComponent(content),
    stars: 5
  }).then(() => {
    btnText.value = 'Success, We will contact you soon!'
  })
}
</script>

<template>
  <HeaderLayout></HeaderLayout>
  <div class="contact">
    <h2 class="title">Contact us</h2>
    <p>
      If you have any questions for us, please use the contact form below. You can also contact us using this contact
      form for the following enquiries:
    </p>
    <ul>
      <li>General feedback</li>
      <li>Site troubles</li>
      <li>DMCA notification/claims</li>
      <li>Article submission</li>
      <li>Advertising</li>
    </ul>
    <p>We will do our best to get back to you as soon as possible.</p>
    <div class="form">
      <span class="label-name">Name</span>
      <div class="user-name">
        <input class="input-item" type="text" placeholder="First Name" v-model.trim.lazy="contactInfo.firstName" />
        <input class="input-item" type="text" placeholder="Last Name" v-model.trim.lazy="contactInfo.lastName" />
      </div>
      <label class="label-name" for="email">Email</label>
      <input
        class="input-item"
        style="width: 100%"
        id="email"
        type="text"
        placeholder="Email"
        v-model.trim.lazy="contactInfo.email"
      />
      <label class="label-name" for="comment">Comment</label>
      <textarea class="comment" id="comment" rows="10" v-model.trim.lazy="contactInfo.comment"></textarea>
      <button class="submit-btn" @click="submitForm">{{ btnText }}</button>
    </div>
  </div>
  <footer-item></footer-item>
</template>

<style scoped lang="less">
.contact {
  padding: 15px 16px 30px 16px;
  min-height: 75vh;

  .title {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    padding: 8px 0;
  }
  p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #121212;
    word-wrap: break-word;
    font-family: arial, helvetica, sans-serif;
  }
  ul {
    list-style: disc !important;
    padding-left: 12px;
    margin-bottom: 20px;
  }
  ul li {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  .form {
    position: relative;

    .input-item {
      height: 32px;
      padding: 1px 11px;
      box-sizing: border-box;
      border: 1px solid #c0c4cc;
      border-radius: 4px;
      width: 48%;
      margin-bottom: 10px;
    }

    .label-name {
      display: block;
      font-size: 14px;
      color: #606266;
      margin-bottom: 10px;
    }

    .user-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .comment {
      width: 100%;
      padding: 10px 11px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #c0c4cc;
      margin-bottom: 10px;
    }

    .submit-btn {
      font-size: 14px;
      color: #fff;
      padding: 5px 15px;
      border: 2px solid #409eff;
      border-radius: 4px;
      background-color: #409eff;
    }
  }
}
</style>
