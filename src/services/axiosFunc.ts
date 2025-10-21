import axios from "axios";


const AxiosFunc = (url: string, dados: Record<string, any>, callback: (status: boolean) => void) => {
    let status = false;
    return axios.post(url, dados).then((response) => {

        console.log("Ddos enviados com sucesso ", response.data);
        alert("deu certo")
        status = true
        callback(status);

    }).catch(error => {

        if (error.response) {
            alert("deu errado")
            console.error("Erro de credenciais", error.response.data);
        } else if (error.request) {
            alert("deu errado")
            console.error("Sem resposta do servidor", error.request);
        } else {
            alert("deu errado")
            console.error("Erro desconhecido", error);
        }

        callback(status);

    });

}

export default AxiosFunc;