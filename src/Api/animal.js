import Http from '.';

const API = 'api/animals';

class Animal {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    
    static save(props) {
        if (props.id) {
            return Http.put(`${API}/${props.id}`, props);
        }
        return Http.post(API, props);
    }

    static getOne(id) {
        return Http.get(`${API}/${id}`);
    }

    static delete(id) {
        return Http.delete(`${API}/${id}`);
    }
}

export default Animal;