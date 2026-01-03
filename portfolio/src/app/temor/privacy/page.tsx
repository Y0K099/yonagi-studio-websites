'use client';

import PageLayout from '@/components/PageLayout';

export default function TemorPrivacyPage() {
  return (
    <PageLayout basePath="/temor" brandName="Temor">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">Politique de Confidentialité - Temor</h1>
          <p className="text-sm text-gray-400 mb-8">Dernière mise à jour : 3 janvier 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-300">
              Temor (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;) respecte votre vie privée et s&apos;engage à protéger vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application mobile Temor (le &quot;Service&quot;).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informations que nous collectons</h2>

            <h3 className="text-xl font-semibold text-white mb-3">1.1 Informations de compte</h3>
            <p className="text-gray-300 mb-3">Selon le type de compte que vous créez, nous collectons :</p>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Compte anonyme :</h4>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Nom d&apos;utilisateur (pseudo)</li>
                <li>Identifiant unique généré automatiquement</li>
                <li>Date de création du compte</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Compte avec email/mot de passe :</h4>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Adresse email</li>
                <li>Nom d&apos;utilisateur (pseudo)</li>
                <li>Mot de passe (stocké de manière sécurisée et cryptée via Firebase Authentication)</li>
                <li>Date de création du compte</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Compte Google :</h4>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Adresse email Google</li>
                <li>Nom d&apos;utilisateur (extrait de votre profil Google)</li>
                <li>Identifiant unique Google</li>
                <li>Date de création du compte</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Compte Apple :</h4>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Adresse email Apple (si fournie)</li>
                <li>Nom complet (si fourni lors de la première connexion)</li>
                <li>Identifiant unique Apple</li>
                <li>Date de création du compte</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.2 Données de jeu</h3>
            <p className="text-gray-300 mb-2">Pendant que vous utilisez l&apos;application, nous collectons :</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Code de partie</li>
              <li>Statut de jeu (en attente, en cours, terminé)</li>
              <li>Données de partie : votre cible, votre carte de mission, votre statut (vivant/éliminé), nombre de victimes</li>
              <li>Historique des parties jouées</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.3 Données techniques</h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Token de notification push (FCM Token) pour vous envoyer des notifications de jeu</li>
              <li>Données de session et d&apos;authentification gérées par Firebase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Comment nous utilisons vos informations</h2>
            <p className="text-gray-300 mb-3">Nous utilisons vos données uniquement pour :</p>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Fournir le service</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Créer et gérer votre compte</li>
              <li>Vous permettre de rejoindre et créer des parties</li>
              <li>Gérer la logique de jeu (attribution des cibles, missions, éliminations)</li>
              <li>Afficher les noms d&apos;utilisateur aux autres joueurs dans les parties</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Communications</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Envoyer des notifications push concernant vos parties en cours (éliminations, fin de partie, etc.)</li>
              <li>Vous informer des événements importants du jeu</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Sécurité et intégrité</h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Protéger contre la fraude et les abus</li>
              <li>Assurer le bon fonctionnement du Service</li>
              <li>Déboguer et corriger les problèmes techniques</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Partage de vos informations</h2>

            <h3 className="text-xl font-semibold text-white mb-3">3.1 Avec les autres joueurs</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Votre <strong>nom d&apos;utilisateur</strong> est visible par les autres joueurs dans les parties que vous rejoignez</li>
              <li>Vos <strong>statistiques de jeu</strong> (statut vivant/mort, nombre de victimes) sont visibles par les autres joueurs dans la même partie</li>
              <li>Votre <strong>adresse email</strong> n&apos;est JAMAIS partagée avec d&apos;autres utilisateurs</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Avec des tiers</h3>
            <p className="text-gray-300 mb-3">Nous utilisons les services suivants qui peuvent avoir accès à certaines de vos données :</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><strong>Firebase (Google LLC)</strong> : Hébergement de base de données, authentification, notifications push
                <br /><a href="https://firebase.google.com/support/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Politique de confidentialité Firebase</a>
              </li>
              <li><strong>Google Sign-In</strong> : Si vous utilisez la connexion Google
                <br /><a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Politique de confidentialité Google</a>
              </li>
              <li><strong>Sign in with Apple</strong> : Si vous utilisez la connexion Apple
                <br /><a href="https://www.apple.com/legal/privacy/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Politique de confidentialité Apple</a>
              </li>
            </ul>
            <p className="text-gray-300">Nous ne vendons jamais vos données personnelles à des tiers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Conservation des données</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li><strong>Comptes actifs</strong> : Vos données sont conservées tant que votre compte est actif</li>
              <li><strong>Comptes anonymes</strong> : Si vous vous déconnectez d&apos;un compte anonyme, vous ne pourrez plus y accéder car aucune information de récupération n&apos;est disponible</li>
              <li><strong>Suppression de compte</strong> : Lorsque vous supprimez votre compte, toutes vos données personnelles sont immédiatement et définitivement effacées de nos serveurs</li>
              <li><strong>Comptes inactifs</strong> : Nous ne supprimons pas automatiquement les comptes inactifs. Vous gardez le contrôle total de vos données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Sécurité des données</h2>
            <p className="text-gray-300 mb-3">Nous prenons la sécurité de vos données au sérieux :</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Utilisation de <strong>Firebase Authentication</strong> pour une authentification sécurisée</li>
              <li><strong>Mots de passe cryptés</strong> et jamais stockés en clair</li>
              <li><strong>Firebase App Check</strong> pour protéger contre les abus</li>
              <li><strong>Communications sécurisées</strong> via HTTPS</li>
              <li><strong>Règles de sécurité Firestore</strong> pour limiter l&apos;accès aux données</li>
            </ul>
            <p className="text-gray-300">Cependant, aucune méthode de transmission sur Internet n&apos;est 100% sécurisée. Nous ne pouvons garantir une sécurité absolue.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits</h2>
            <p className="text-gray-300 mb-3">Conformément au <strong>RGPD</strong> (pour les utilisateurs dans l&apos;UE) et autres lois applicables, vous avez le droit de :</p>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-white">6.1 Accès</h3>
                <p className="text-gray-300">Demander une copie de vos données personnelles</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">6.2 Rectification</h3>
                <p className="text-gray-300">Corriger vos informations inexactes ou incomplètes</p>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Vous pouvez modifier votre nom d&apos;utilisateur directement dans l&apos;application</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">6.3 Suppression</h3>
                <p className="text-gray-300">Demander la suppression de votre compte et de vos données</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">6.4 Portabilité</h3>
                <p className="text-gray-300">Recevoir vos données dans un format structuré et lisible par machine</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">6.5 Opposition</h3>
                <p className="text-gray-300">Vous opposer au traitement de vos données</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">6.6 Limitation</h3>
                <p className="text-gray-300">Demander la limitation du traitement de vos données</p>
              </div>
            </div>

            <p className="text-gray-300 mt-4">Pour exercer ces droits, contactez-nous à : <a href="mailto:support@yonagistudio.com" className="text-blue-400 hover:text-blue-300">support@yonagistudio.com</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Suppression de compte</h2>
            <p className="text-gray-300 mb-3">Pour supprimer votre compte :</p>
            <ol className="list-decimal pl-6 text-gray-300 mb-4">
              <li>Ouvrez l&apos;application Temor</li>
              <li>Allez dans <strong>Paramètres</strong> &gt; <strong>Mon compte</strong></li>
              <li>Appuyez sur <strong>&quot;Supprimer mon compte&quot;</strong></li>
              <li>Confirmez la suppression</li>
            </ol>
            <p className="text-gray-300 mb-4">Vous pouvez également nous contacter à <a href="mailto:support@yonagistudio.com" className="text-blue-400 hover:text-blue-300">support@yonagistudio.com</a> pour demander la suppression de votre compte.</p>

            <p className="text-gray-300 mb-2">Après suppression :</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Votre compte sera immédiatement et définitivement supprimé</li>
              <li>Vos données personnelles seront effacées de nos serveurs</li>
              <li>Votre nom d&apos;utilisateur pourra être réutilisé par d&apos;autres utilisateurs</li>
              <li>Les parties archivées seront supprimées</li>
              <li>Cette action est irréversible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Données des mineurs</h2>
            <p className="text-gray-300 mb-3">Temor est destiné à un public de <strong>13 ans et plus</strong>.</p>
            <p className="text-gray-300 mb-3">Nous ne collectons pas sciemment de données personnelles d&apos;enfants de moins de <strong>13 ans</strong>. Si vous pensez qu&apos;un enfant de moins de 13 ans nous a fourni des données personnelles, contactez-nous immédiatement à support@yonagistudio.com et nous supprimerons ces informations.</p>
            <p className="text-gray-300"><strong>Pour les parents :</strong> Si votre enfant de 13 ans ou plus utilise Temor, nous vous encourageons à superviser son utilisation et à discuter avec lui de la sécurité en ligne.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Transferts internationaux</h2>
            <p className="text-gray-300 mb-3">Vos données sont hébergées sur les serveurs Firebase situés dans la région <strong>Europe-West9</strong> (selon votre configuration).</p>
            <p className="text-gray-300">Firebase (Google LLC) peut transférer vos données vers d&apos;autres pays. Ces transferts sont effectués conformément aux réglementations applicables, notamment le RGPD.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Cookies et technologies similaires</h2>
            <p className="text-gray-300 mb-3">L&apos;application Temor n&apos;utilise pas de cookies traditionnels. Cependant, nous utilisons :</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li><strong>Tokens de session</strong> pour maintenir votre connexion</li>
              <li><strong>Stockage local</strong> (SharedPreferences) pour sauvegarder vos préférences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications de cette politique</h2>
            <p className="text-gray-300 mb-3">Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons de tout changement significatif via :</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Une notification dans l&apos;application</li>
              <li>Un email à votre adresse enregistrée (si vous avez un compte non-anonyme)</li>
            </ul>
            <p className="text-gray-300">La date de &quot;Dernière mise à jour&quot; en haut de ce document indique la dernière révision. Nous vous encourageons à consulter régulièrement cette politique.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Législation applicable</h2>
            <p className="text-gray-300 mb-4">Cette politique de confidentialité est conforme au Règlement Général sur la Protection des Données (RGPD) de l&apos;Union Européenne et aux lois applicables en matière de protection des données personnelles.</p>
            <p className="text-gray-300 mb-2">En cas de litige concernant cette politique ou le traitement de vos données, vous pouvez :</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Nous contacter directement à support@yonagistudio.com</li>
              <li>Déposer une plainte auprès de votre autorité de protection des données locale (CNIL en France, par exemple)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Contact</h2>
            <p className="text-gray-300 mb-3">Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><strong>Email :</strong> <a href="mailto:support@yonagistudio.com" className="text-blue-400 hover:text-blue-300">support@yonagistudio.com</a></li>
              <li><strong>Site web :</strong> <a href="https://www.yonagistudio.com/temor/" className="text-blue-400 hover:text-blue-300">https://www.yonagistudio.com/temor/</a></li>
            </ul>
            <p className="text-gray-300">Nous nous engageons à répondre à vos demandes dans un délai de 7 jours ouvrés.</p>
          </section>

          <section className="mb-8 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Résumé simplifié</h2>
            <p className="text-sm text-gray-400 italic mb-4">(non juridiquement contraignant)</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ce que nous collectons :</h3>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Votre pseudo et adresse email (si compte non-anonyme)</li>
                  <li>Vos données de jeu (parties, missions, scores)</li>
                  <li>Token de notification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Comment nous l&apos;utilisons :</h3>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Pour faire fonctionner le jeu</li>
                  <li>Pour vous envoyer des notifications de jeu</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ce que nous ne faisons PAS :</h3>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Vendre vos données</li>
                  <li>Partager votre email avec d&apos;autres joueurs</li>
                  <li>Utiliser vos données pour de la publicité ciblée</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Vos droits :</h3>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Vous pouvez supprimer votre compte à tout moment</li>
                  <li>Vous pouvez demander vos données</li>
                  <li>Vous pouvez nous contacter pour toute question</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
