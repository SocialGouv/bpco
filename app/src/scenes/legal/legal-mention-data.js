import React from "react";
import LegalScreen from "./legal-screen";
import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";

const LegalMentionsData = ({ navigation }) => {
  const content = (
    <View>
      <Text style={styles.h1}>Données et responsabilités</Text>
      <Text style={styles.default}>
        BPCO est développé au sein de la Fabrique numérique des ministères
        sociaux, avec l’appui de l’Agence régionale de santé Île-de-France. BPCO
        permet aux patients atteints de Bronchopneumopathie Chronique
        Obstructive en stade avancé de prévenir les exacerbations et d’éviter
        les hospitalisations en apprenant à observer l’évolution de leurs
        symptômes cliniques quotidiennement. BPCO manipule les données
        personnelles suivantes : Sexe ; Date de naissance. Toutefois, aucune
        donnée n’est remontée au Ministère de la santé et de la prévention, à
        l’ARS ou à l’équipe BPCO. Toutes les données sont maintenues dans
        l’appareil en local de l’utilisateur. Par ailleurs, nous ne sommes pas
        en mesure d’identifier les personnes concernées.
      </Text>
      <Text style={styles.h1}>Cookies</Text>
      <Text style={styles.default}>
        En application de l’article 5(3) de la directive 2002/58/CE modifiée
        concernant le traitement des données à caractère personnel et la
        protection de la vie privée dans le secteur des communications
        électroniques, transposée à l’article 82 de la loi n°78-17 du 6 janvier
        1978 relative à l’informatique, aux fichiers et aux libertés, les
        traceurs ou cookies suivent deux régimes distincts.{"\n\n"}Les cookies
        strictement nécessaires au service ou ayant pour finalité exclusive de
        faciliter la communication par voie électronique sont dispensés de
        consentement préalable au titre de l’article 82 de la loi n°78-17 du 6
        janvier 1978.{"\n\n"}Les cookies n’étant pas strictement nécessaires au
        service ou n’ayant pas pour finalité exclusive de faciliter la
        communication par voie électronique doivent être consenti par
        l’utilisateur.{"\n\n"}Ce consentement de la personne concernée pour une
        ou plusieurs finalités spécifiques constitue une base légale au sens du
        RGPD et doit être entendu au sens de l'article 6-a du Règlement (UE)
        2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à
        la protection des personnes physiques à l'égard du traitement des
        données à caractère personnel et à la libre circulation de ces données.
        {"\n\n"}Un cookie est un fichier déposé sur votre terminal lors de la
        visite d’un site. Il a pour but de collecter des informations relatives
        à votre navigation et de vous adresser des services adaptés à votre
        terminal (ordinateur, mobile ou tablette).{"\n\n"}Les cookies recensés
        ne sont que des cookies strictement nécessaires au service dispensés de
        consentement préalable.{" "}
      </Text>
      <Text style={styles.h1}>
        Nous utilisons Matomo pour la mesure d’audience, configuré dans le
        respect des recommandations de la CNIL.
      </Text>
    </View>
  );

  return (
    <LegalScreen
      navigation={navigation}
      title="Mention d'information sur les données"
      content={content}
    />
  );
};

const styles = StyleSheet.create({
  //Article x - Titre
  h1: {
    color: colors.DARK_BLUE,
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "Karla-Bold",
  },

  // x.y - Sous titre
  h2: {
    color: colors.DARK_BLUE,
    fontSize: 17,
    marginVertical: 8,
  },

  // A - Paragraphe
  h3: {
    color: colors.DARK_BLUE,
    fontSize: 15,
    marginVertical: 8,
  },

  // corps de texte
  default: {
    flex: 1,
    color: colors.BLUE,
    fontSize: 15,
    marginVertical: 8,
  },

  li: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
  },
  dotLi: {
    paddingTop: 8,
    marginRight: 10,
  },
  link: {
    color: colors.LIGHT_BLUE,
    textDecorationLine: "underline",
  },
});
export default LegalMentionsData;
