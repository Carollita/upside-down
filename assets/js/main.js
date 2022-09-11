import { subscribeToHellfireClub } from './firebase/hellfireclub.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscribe = document.getElementById('btnSubscribe');
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Store data in Firebase
    const subscriptionId = await subscribeToHellfireClub(subscription);

    //Clear input values and show message for user
    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';
    alert(`Inscrito com sucesso: ${subscriptionId}`);
});

