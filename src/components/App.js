import React, { useState } from 'react'
import AuthForm from './AuthForm';
import ButtonAuth from './UI/button/buttonAuth';
import Collection from './UI/photoCollection/Collection';
// import ButtonGame from './UI/button/buttonGame';
import MyModal from './UI/modal/modal';

const categoryArr = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Город " },
]

function App() {
    const [categoryId, setCategoryId] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState('');
    const [collections, setCollections] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(`https://64987e159543ce0f49e216b4.mockapi.io/photos?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.log(err);
                alert("Ошибка при получении данных")
            })
            .finally(() => {
                setIsLoading(false)
            });
    }, [categoryId, page]);

    const [modal, setModal] = useState(false);

    return (
        <div className='App'>
            <div className='navbar'>
                <ButtonAuth onClick={() => setModal(true)}>Авторизация</ButtonAuth>
            </div>
            {/* <div className='container'> */}
            <MyModal visible={modal} setVisible={setModal} title="Вход" crossBtn>
                <AuthForm onClose={() => setModal(false)} />
            </MyModal>
            {/* <div className='game'>
                    <ButtonGame>Начать Игру</ButtonGame>
                </div> */}
            {/* </div> */}
            <div><h1>Моя коллекция фотографий</h1>
                <div className='top'>
                    <ul className='tags'>
                        {categoryArr.map((obj, i) =>
                            <li
                                onClick={() => setCategoryId(i)}
                                className={categoryId === i ? 'active' : ''}
                                key={obj.name}>{obj.name}</li>)}
                    </ul>
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
                </div>
                <div className="content">
                    {isLoading ? (<h2>Идет загрузка фотографий ...</h2>) : (
                        collections
                            .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((obj, index) =>
                                <Collection
                                    key={index}
                                    name={obj.name} images={obj.photos} />)
                    )}
                </div>
                <ul className="pagination">
                    {[...Array(3)].map((_, i) =>
                        <li
                            onClick={() => setPage(i + 1)}
                            className={page == (i + 1) ? 'active' : ''}>
                            {i + 1}
                        </li>
                    )}
                </ul>
            </div>

        </div >
    )
}

export default App;