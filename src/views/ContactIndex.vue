<template>
    <div class="contact-index">
        <div class="index__banner">
            <h4>Contact</h4>
            <BreadcrumbNav :path="path" />
        </div>

        <h5>Get In Touch With Us</h5>
        <h6>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h6>

        <div class="index__info">
            <div class="info__details">
                <div class="details__item">
                    <img src="@/assets/contact-index/icon-address.png" />
                    <div class="item__title">Address</div>
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>

                <div class="details__item">
                    <img src="@/assets/contact-index/icon-phone.png" />
                    <div class="item__title">Phone</div>
                    <p>
                        Mobile: +(84) 546-6789<br />
                        Hotline: +(84) 456-6789
                    </p>
                </div>

                <div class="details__item">
                    <img src="@/assets/contact-index/icon-time.png" />
                    <div class="item__title">Working Time</div>
                    <p>
                        Monday-Friday: 9:00 - 22:00<br />
                        Saturday-Sunday: 9:00 - 21:00
                    </p>
                </div>
            </div>

            <div class="info__form">
                <el-form ref="formRef" :model="form" label-position="top">
                    <el-form-item label="Your Name" prop="yourName">
                        <el-input v-model="form.yourName" placeholder="Abc" />
                    </el-form-item>
                    <el-form-item label="Email address" prop="email">
                        <el-input v-model="form.email" placeholder="Abc@def.com" />
                    </el-form-item>
                    <el-form-item label="Subject" prop="subject">
                        <el-input v-model="form.subject" placeholder="This is an optional" />
                    </el-form-item>
                    <el-form-item label="Message" prop="message">
                        <el-input v-model="form.message" :rows="5" type="textarea" placeholder="Hi! i’d like to ask about" />
                    </el-form-item>
                </el-form>

                <button>Submit</button>
            </div>
        </div>

        <FooterFuniro />
    </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'
import FooterFuniro from '@/components/FooterFuniro.vue'

export default {
    components: { BreadcrumbNav, FooterFuniro },
    data() {
        return {
            input: 1,
            path: [
                { name: 'Home', path: '/homeIndex' },
                { name: 'contact', path: '/contactIndex' }
            ],
            form: {
                yourName: '',
                lastName: '',
                subject: '',
                country: '',
                street: '',
                city: '',
                province: '',
                zipCode: '',
                message: '',
                email: '',
                additional: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-index {
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
        margin-top: 98px;
        font-size: 36px;
        line-height: 54px;
    }

    h6 {
        margin-top: 7px;
        width: 644px;
        color: #9f9f9f;
        font-size: 16px;
        line-height: 24px;
        font-weight: normal;
        text-align: center;
    }

    > .el-row {
        padding: 0 100px;
        width: 100%;
    }

    .index__banner {
        width: 100%;
        height: 316px;
        background-image: url('@/assets/shop/banner.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            color: #000;
            font-size: 48px;
            line-height: 72px;
        }

        h5 {
            margin-top: 2px;
            color: #000;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;

            img {
                margin: 0 6px;
                width: 20px;
                height: 20px;
            }

            span:first-of-type {
                font-weight: bold;
            }

            span:last-of-type {
                font-weight: normal;
            }
        }
    }

    .index__info {
        margin-top: 82px;
        display: flex;
        justify-content: center;

        .info__details {
            padding: 46px 76px 70px 106px;
            width: 392px;

            .details__item {
                position: relative;

                img {
                    position: absolute;
                    left: -60px;
                    top: 5px;
                }

                .item__title {
                    font-size: 24px;
                    line-height: 36px;
                }

                p {
                    font-size: 16px;
                    line-height: 24px;
                }
            }

            .details__item + .details__item {
                margin-top: 42px;
            }
        }

        .info__form {
            margin-left: 30px;
            padding: 35px 78px 70px;
            width: 636px;

            button {
                margin-top: 62px;
                width: 236px;
                height: 55px;
                border-radius: 5px;
                color: #fff;
                font-size: 16px;
                background-color: #b88e2f;
                border: 1px solid #b88e2f;
            }
        }
    }
}
</style>
