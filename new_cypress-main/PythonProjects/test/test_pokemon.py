import requests
import pytest

URL = 'https://api.pokemonbattle.ru/v2'
TOKEN = 'b2872ba7f890c4f442723b74f9066b3b'
HEADER = {'Conten-Type':'application/json','trainer_token': TOKEN}
TRAINER_ID = 6429

def test_status_code():
    response = requests.get(url = f'{URL}/pokemons',params={'trainer_id': TRAINER_ID})
    assert response.status_code == 200
def test_part_of_response():
    response_get = requests.get(url = f'{URL}/pokemons',params={'trainer_id': TRAINER_ID})
    assert response_get.json()["data"][0]['name'] =='Бульбазавр2'


@pytest.mark.parametrize('key,value',[('name','Бульбазавр2'),('trainer_id',TRAINER_ID),('id','42971')])
def test_parametrize (key,value):
    response_parametrize = requests.get(url = f'{URL}/pokemons',params = {'trainer_id':TRAINER_ID})
    assert response_parametrize.json()["data"][0][key] == value