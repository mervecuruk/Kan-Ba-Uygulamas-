import axios from "axios";

const AuthService = {

    login: async (username, password) => {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url, {
            "email": username,
            password
        }); //giriş başarılı ise access_token ve refresh_token döner

        //!localStorage:silinmeyen kayıt
        //!sessionStorage:tarayıcı açık olduğu sürece kayıt depolanır.kapatıldığında silinir

        if(response.data.access_token){
            localStorage.setItem("userToken",JSON.stringify(response.data));
            //giriş başarılı ise tokenları locakStorage a kaydeder
        }
        return response.data;
    },

    logout:()=>{
        localStorage.removeItem("userToken");
        //login durumunda localStorage a kaydedilmiş olan tokenları siler
    }
}



export default AuthService;