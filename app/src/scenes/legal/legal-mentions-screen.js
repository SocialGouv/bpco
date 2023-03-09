import React from "react";
import LegalScreen from "./legal-screen";
import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";

const LegalMentions = ({ navigation }) => {
  const content = (
    <View>
      <Text style={styles.h1}>Editeur de l'application</Text>
      <Text style={styles.default}>
        L'application BPCO'Mieux est éditée par L’Agence régionale de santé
        Île-de-France:
      </Text>
      <Text style={styles.default}>
        Immeuble « Le Curve »{"\n"}
        13 rue du Landy{"\n"}
        93200 Saint-Denis{"\n"}
        France{"\n"}
        Tél. : 01 44 02 00 00
      </Text>
      <Text style={styles.h1}>Directeur de la publication</Text>
      <Text style={styles.default}>
        La directrice de publication est Madame Amélie Verdier, directrice
        générale de l’Agence régionale de santé (ARS) Île-de-France.
      </Text>
      <Text style={styles.h1}>Hébergement de l'application</Text>
      <Text style={styles.default}>
        Cette application est hébergée par Microsoft Azure France (région France
        centre) :
      </Text>
      <Text style={styles.default}>
        Microsoft France{"\n"}
        39 Quai du Président Roosevelt{"\n"}
        92130 ISSY-LES-MOULINEAUX{"\n"}
        France
      </Text>
      <Text style={styles.h1}>Accessibilité</Text>
      <Text style={styles.default}>
        La conformité aux normes d’accessibilité numérique est un objectif
        ultérieur mais nous tâchons de rendre cette application mobile
        accessible à toutes et à tous.
      </Text>
      <Text style={styles.h1}>Signaler un dysfonctionnement</Text>
      <Text style={styles.default}>
        Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder à
        un contenu ou une fonctionnalité de l’application, merci de nous en
        faire part. Si vous n’obtenez pas de réponse rapide de notre part, vous
        êtes en droit de faire parvenir vos doléances ou une demande de saisine
        au Défenseur des droits.{"\n"}
        Pour le joindre, vous pouvez :{"\n"}- Utiliser le{"\n"}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://formulaire.defenseurdesdroits.fr/code/afficher.php?ETAPE=accueil_2016"
            )
          }
        >
          <Text style={styles.link}>formulaire de contact en ligne ici</Text>
        </TouchableOpacity>
        {"\n"}- Composer le 09 69 39 00 00 (du lundi au vendredi de 8h à 20h)
        {"\n"}-Envoyer un courrier (sans timbre) à l’adresse suivante :
        Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.
      </Text>
    </View>
  );

  return (
    <LegalScreen
      navigation={navigation}
      title="Mentions légales"
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
export default LegalMentions;
