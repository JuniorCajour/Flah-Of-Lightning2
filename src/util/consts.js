import {
    UserOutlined
} from '@ant-desing/icons'

export const Networks = {
    BSC: {
        id: 56,
        rpc: 'https://bsc-dataseed1.binance.org/'
    }
}

export const initialState = {
    TheHeader:  {
        account: undefined,
        displayAccount: undefined

    },
    Account: {
        account: undefined,
        balance: undefined,
        balance_usd: 0,
        token_price: undefined,
        token_price_usd: 0,
        token_price_change: 0,
        tokenSold: 0,
        totalTokens: 0,
        token_symbol: '',
        phase: {},
        data: {}
    },
    TokenSale: {
        account: undefined,
        phase: {},
        phases: [],
        percentPhase: 0,
        IsModalVisible: false,
        input_token: 0,
        input_bnb: 0
    }
}
