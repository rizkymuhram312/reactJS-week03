import axios from 'axios';
import apiURL from '../../config/config-url'

const listProvince = async () => {
    try {
        let response = await axios.get(`${apiURL}/api/province/`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

const create = async (province) => {
    try{
        let response = await axios.post(`${apiURL}/api/province/`,{
            data : province
        })
        return await response.data
    } catch(err){
        return await err.message
    }
};

const deleteProvince = async (id) => {
    try{
        let response = await axios.delete(`${apiURL}/api/province/${id}`)
        return await response.data
    } catch(err){
        return await err.message
    }
};

const updateProvince = async (province) => {
    try{
        let response = await axios.put(`${apiURL}/api/province/${province.prov_id}`,{
            data:province
        })
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {listProvince,create,deleteProvince,updateProvince}