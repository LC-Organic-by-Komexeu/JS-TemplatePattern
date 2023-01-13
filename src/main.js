import ListItemPlugin from './ListItemPlugin.js'
import CountyComboPlugin from './CountyComboPlugin.js'

window.ListItemInstance = new ListItemPlugin({
    container: `.targetDiv1`,
    arrData: [
        ['1', '2', '3'],
        ['1_1', '1_2', '1_3', '2_4', '2_5', '2_6', '3_7', '3_8', '3_9'],
        [
            '1_a', '1_b', '2_c', '2_d', '3_e', '3_f', '4_g', '4_h',
            '5_i', '5_j', '6_k', '6_l', '7_m', '7_n', '8_o', '8_p',
        ]
    ]
});

console.log("\r")

window.CountyComboInstance = new CountyComboPlugin({
    container: `.targetDiv2`,
    arrData: [
        `https://epv.lingcheng.tw/Combo/LandCounty`,
        `https://epv.lingcheng.tw/Combo/LandTown`,
    ]
});
