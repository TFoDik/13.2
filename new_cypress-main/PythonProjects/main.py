import requests

URL = 'https://api.pokemonbattle.ru/v2'
TOKEN = 'b2872ba7f890c4f442723b74f9066b3b'
HEADER = {'Conten-Type':'application/json','trainer_token': TOKEN}

body_registratin = {
    "trainer_token": "b2872ba7f890c4f442723b74f9066b3b",
    "email": "ges@dolnov.ru",
    "password": "Iloveqa1"
}
body_ak ={
    "trainer_token": "b2872ba7f890c4f442723b74f9066b3b"
}
# Регистрация тренера
response_re =requests.post(url = f'{URL}/trainers/reg',headers = HEADER,json= body_registratin)
print(response_re.text)
# Активация тренера
response_ak =requests.post(url = f'{URL}/trainers/confirm_email',headers = HEADER,json=body_ak)
print(response_ak.text)

body_registration = {
    "name": "Бульбазавр",
    "photo_id": 1
}
# Создание покемона 
response_popo = requests.post(url = f'{URL}/pokemons', headers = HEADER, json = body_registration )
print (response_popo.text)
Pokemon_id = response_popo.json()['id']


# Смена имени
body_iz = {
    "pokemon_id": Pokemon_id,
    "name": "Бульбазавр2",
    "photo_id": 3
}
response_iz = requests.put(url=f'{URL}/pokemons',headers = HEADER, json = body_iz )
print (response_iz.text)

# Поймать  покемона
body_Po = {
    "pokemon_id": Pokemon_id
}
response_Po = requests.post(url=f'{URL}/trainers/add_pokeball',headers = HEADER, json = body_Po )

print (response_Po.text)
