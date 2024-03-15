import React from 'react'

class Users extends React.Component {
    users = [
        {
            id: 1,
            ism: 'Vinc',
            familiya: 'Negmatov',
            bio: 'Kibexavfsizlik mutaxassisi. Oilali. IT sohasida 4 yillik tajribaga ega.',
            yosh: 26,
            isHappy: true
        },
        {
            id: 2,
            ism: 'Sector',
            familiya: 'Lepos',
            bio: 'Tibbiyot xodimi. Oilali. Tibbiyot sohasida 7 yillik tajribaga ega.',
            yosh: 33,
            isHappy: false
        }
    ]
    render() {
        if(this.users.length > 0)
            return (<div>
                {this.users.map((el) => (<div className="user" key={el.id}>
                    <h3>{el.ism} {el.familiya}</h3>
                    <p>{el.bio}</p>
                    <b>{el.isHappy ? "Xursand :)" : "Xafa :("}</b>
                </div>) )}
            </div>)
        else 
            return(<div className="user">
                <h3>Foydalanuvchilar mavjud emas</h3>
            </div>)
    }
}

export default Users