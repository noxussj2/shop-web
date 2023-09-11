<template>
    <div class="contact-index">
        <div class="base__banner">
            <img :src="banners.images && banners.images[0]" />
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
                    <p>{{ contact.address }}</p>
                </div>

                <div class="details__item">
                    <img src="@/assets/contact-index/icon-phone.png" />
                    <div class="item__title">Phone</div>
                    <p>
                        Mobile: {{ contact.mobile }}<br />
                        Hotline: {{ contact.phone }}
                    </p>
                </div>

                <div class="details__item">
                    <img src="@/assets/contact-index/icon-time.png" />
                    <div class="item__title">Working Time</div>
                    <p>
                        {{ contact.workingTime }}
                    </p>
                </div>
            </div>

            <div class="info__form">
                <el-form ref="formRef" :model="form" label-position="top" :rules="formRules">
                    <el-form-item label="Your Name" prop="name">
                        <el-input v-model="form.name" placeholder="Abc" />
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

                <button @click="submitForm">Submit</button>
            </div>
        </div>

        <FooterFuniro />
    </div>
</template>

<script>
import { IBanners, IContactInfo, ISubmitContact } from '@/api/contact-index/index.js'
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
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            formRules: {
                name: [{ required: true, message: 'Place Input YourName', trigger: 'blur' }],
                email: [{ required: true, message: 'Place Input email', trigger: 'blur' }],
                subject: [{ required: true, message: 'Place Input subject', trigger: 'blur' }],
                message: [{ required: true, message: 'Place Input message', trigger: 'blur' }]
            },
            banners: {
                images: []
            },
            contact: {
                address: '',
                mobile: '',
                phone: '',
                workingTime: ''
            }
        }
    },
    methods: {
        /**
         * 获取封面图
         */
        getBanners() {
            IBanners({ page: 'contactIndex' }).then((res) => {
                this.banners = res
            })
        },

        /**
         * 获取联系信息
         */
        getContactInfo() {
            IContactInfo().then((res) => {
                this.contact = res
            })
        },

        /**
         * 表单提交
         */
        submitForm() {
            this.$refs.formRef.validate((valid) => {
                if (valid) {
                    ISubmitContact(this.form).then(() => {
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        })
                    })
                }
            })
        }
    },
    mounted() {
        this.getBanners()
        this.getContactInfo()
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
                cursor: pointer;
            }
        }
    }
}
</style>
