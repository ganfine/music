<script lang="ts" setup>
import HeaderLayout from '@/components/hearder/HeaderLayout.vue'
import FooterItem from '@/components/footer/FooterItem.vue'
</script>
<template>
  <HeaderLayout></HeaderLayout>
  <div class="dmca wrapper">
    <p>
      We are committed to safeguard the intellectual property rights of others, and expect our users and business
      partners to do the same. Any creative material used in the Site is ensured to be lawfully licensed and authorized.
      However, we cannot fully guarantee at all times that the licensors of any creative materials are fully authorized
      for such use.
    </p>
    <p>
      In accordance with the Digital Millennium Copyright Act of 1998, we will respond expeditiously to claims of
      copyright infringement committed using the Platform that are reported to our designated Copyright Agent:
      team@animalgoodnews.com
    </p>
    <p>
      If you believe that your intellectual property rights have been infringed upon,please follow our notice and
      takedown procedure, as follows:
    </p>
    <h2>Reporting a notice for copyright Infringement:</h2>
    <p>
      If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us
      with a written notice containing the following information:
    </p>
    <p>1. A description of the copyrighted work or other intellectual property that you claim has been infringed;</p>
    <p>2. A description of where the material that you claim is infringing is located on the Site;</p>
    <p>
      3. An address, telephone number, and email address where we can contact you and, if different, an email address
      where the alleged infringing party, if not Company, can contact you;
    </p>
    <p>
      4. A statement that you have a good-faith belief that the use is not authorized by the copyright owner or other
      intellectual property rights owner, by its agent, or by law;
    </p>
    <p>
      5. A statement made under penalty of perjury that the information provided is accurate and the notifying party is
      authorized to make the complaint on behalf of the copyright owner.
    </p>
    <p>6. Your electronic or physical signature.</p>
    <p>
      We may request additional information before removing any allegedly infringing material. In the event we removes
      the allegedly infringing materials, Company will immediately notify the person responsible for posting such
      materials that we removed or disabled access to the materials. We may also provide the responsible person with
      your email address so that the person may respond to your allegations.
    </p>
    <h2>Reporting a counter-notice to the Designated Agent:</h2>
    <p>
      If you believe that your Content that was removed (or to which access was disabled) is not infringing, or that you
      have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and
      use the material in your Content, you may send a counter-notice containing the following information to the
      Copyright Agent:
    </p>
    <p>1, Your name, address, and telephone number or email address.</p>
    <p>
      2, A description of the material that was removed and the location on the Site (e.g., the URL) where it previously
      appeared.
    </p>
    <p>
      3, A statement under penalty of perjury that you have a good faith belief that the material was removed or
      disabled as a result of mistake or misidentification.
    </p>
    <p>4, Your electronic or physical signature.</p>
    <p>
      Please note that we will send any complete counter-notifications we receive to the person who submitted the
      original DMCA notice. That person may elect to file a lawsuit against you for copyright infringement. If we do not
      receive notice that a lawsuit has been filed within ten (10) business days after we provide notice of your
      counter-notification, we will restore the removed materials. Until that time, your materials will remain removed.
    </p>
    <p>
      In filing your notice or counter-notification, please make sure that you have complied with all of the above
      requirements. If we request additional information necessary to make your DMCA notice or counter-notification
      complete, please provide that information promptly. If you fail to comply with all of these requirements, your
      DMCA notice or counter-notification may not be processed further.
    </p>
    <p>
      In addition, please make sure that all of the information you provide is accurate. We may disclose any
      communications concerning DMCA notices or other intellectual property complaints with third parties, including the
      Publisher or end user who have posted the allegedly infringing material.
    </p>
    <p>
      Please contact the designated Copyright Agent to receive notification of Claimed Infringement at
      team@animalgoodnews.com
    </p>
  </div>
  <footer-item></footer-item>
</template>
<style lang="less" scoped>
.dmca {
  padding: 16px 16px 30px;
  p {
    word-wrap: break-word;
    color: #121212;
    font-family: arial, helvetica, sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    padding: 8px 0;
    font-weight: bold;
  }
}
</style>
