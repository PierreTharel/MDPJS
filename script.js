function checkForm(form)
  {
    if(form.email.value == "") {
      alert("Le champ Email ne doit pas etre vide");
      form.email.focus();
      return false;
    }
    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(form.email.value)) {
      alert("Rentrez une adresse mail valide");
      form.email.focus();
      return false;
    }

    if(form.mdp1.value != "" && form.mdp1.value == form.mdp2.value) {
      if(form.mdp1.value.length < 14) {
        alert("Vous devez rentrer au minimum 14 caracteres");
        form.mdp1.focus();
        return false;
      }
      if(form.mdp1.value == form.email.value) {
        alert("Le mot de passe doit etre different de votre e-mail");
        form.mdp1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.mdp1.value)) {
        alert("Votre mot de passe doit contenir au moins un chiffre");
        form.mdp1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.mdp1.value)) {
        alert("Votre mot de passe doit contenir au moins une minuscule");
        form.mdp1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.mdp1.value)) {
        alert("Votre mot de passe doit contenir au moins une majuscule");
        form.mdp1.focus();
        return false;
      }
    } else {
      alert("Veuillez entrer ou correspondre votre mot de passe !");
      form.mdp1.focus();
      return false;
    }

    alert("Bienvenue sur le Wikipedia de l'Eau-Tarie !");
    return true;
  }
