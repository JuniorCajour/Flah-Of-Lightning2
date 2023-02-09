import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import NavItems from "./components/NavItems.js";
import TheHeader from "./components/TheHeader.js";
import TokenSale from "./components/TokenSale.js";
import Account from "./components/Account.js";
import Error404 from "./components/Error404.js"
import TheFooter from "./components/TheFooter.js";

export default class App extends element {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
                <Layout style={{ minHeight: "100vh" }}>                    
                    <NavItems />
                    <Layout className="site-layout">
                        <TheHeader />
                        <Content>
                            <Routes>
                                <Route path="/token-sale" element={<TokenSale />} />
                                <Route path="/my-account" element={<Account />} />
                                <Route element={Error404} />
                            </Routes>
                        </Content>
                        <TheFooter/>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }    

   }

   