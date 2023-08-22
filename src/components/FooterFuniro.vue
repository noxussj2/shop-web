<template>
    <div class="footer-funiro">
        <main>
            <aside>
                <h4>Funiro.</h4>
                <p>
                    400 University Drive Suite 200 Coral Gables,<br />
                    FL 33134 USA
                </p>
            </aside>

            <table>
                <thead>
                    <th style="width: 25%">Links</th>
                    <th style="width: 25%">Help</th>
                    <th style="width: 50%">Newsletter</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Home</td>
                        <td>Payment Options</td>
                        <td class="table__email">
                            <input type="text" placeholder="Enter Your Email Address" />
                            <span>SUBSCRIBE</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Shop</td>
                        <td>Returns</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td>Privacy Policies</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </main>

        <footer>2023 furino. All rights reverved</footer>
    </div>
</template>

<style lang="scss" scoped>
.footer-funiro {
    margin-top: 38px;
    padding: 48px 102px 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.17);
    height: 505px;

    main {
        display: flex;

        aside {
            h4 {
                color: #000;
                font-weight: bold;
                font-size: 24px;
                line-height: 36px;
            }

            p {
                margin-top: 50px;
                font-size: 16px;
                line-height: 24px;
                color: #9f9f9f;
            }
        }

        table {
            margin-left: 136px;
            width: 710px;
            text-align: left;
            font-size: 16px;
            line-height: 24px;

            thead {
                th {
                    height: 80px;
                    color: #9f9f9f;
                    vertical-align: top;
                }
            }

            tbody {
                tr {
                    td {
                        height: 70px;
                        color: #000000;
                        font-weight: bold;
                        vertical-align: top;
                    }
                }
            }

            .table__email {
                input {
                    border: 0;
                    outline: 0;
                    height: 20px;
                    border-bottom: 1px solid #000;
                }

                input::placeholder {
                    color: #9f9f9f;
                }

                span {
                    margin-left: 38px;
                    height: 22px;
                    font-size: 14px;
                    color: #000;
                    display: inline-block;
                    border-bottom: 1px solid #000;
                }
            }
        }
    }

    footer {
        border-top: 1px solid #d9d9d9;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        height: 97px;
        line-height: 97px;
    }
}
</style>
