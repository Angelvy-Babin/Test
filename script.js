const categoryImages = {
  "Services femme": [
    "https://i.pinimg.com/736x/e5/87/8d/e5878d5ed2dd095282d8f95395b8bbf7.jpg",
    "https://i.pinimg.com/1200x/e5/87/8d/e5878d5ed2dd095282d8f95395b8bbf7.jpg",
    "https://i.pinimg.com/736x/dd/0f/f9/dd0ff92ecee14ef94a9da30ff14035f6.jpg",
    "https://i.pinimg.com/1200x/dd/0f/f9/dd0ff92ecee14ef94a9da30ff14035f6.jpg",
    "https://i.pinimg.com/736x/5e/62/dc/5e62dc876e569863f27db070cbb9ec52.jpg",
    "https://i.pinimg.com/1200x/5e/62/dc/5e62dc876e569863f27db070cbb9ec52.jpg",
    "https://i.pinimg.com/736x/44/69/06/4469060fa92334d65b5d73074338cac3.jpg",
    "https://i.pinimg.com/1200x/44/69/06/4469060fa92334d65b5d73074338cac3.jpg",
    "https://i.pinimg.com/736x/3b/bc/e5/3bbce57c9cc011b7ec3ce630e2abd72d.jpg",
    "https://i.pinimg.com/1200x/3b/bc/e5/3bbce57c9cc011b7ec3ce630e2abd72d.jpg"
  ],
  "Soins femme": [
    "https://i.pinimg.com/736x/5a/2e/a6/5a2ea60623ec2af745ce5f46589cce17.jpg",
    "https://i.pinimg.com/1200x/5a/2e/a6/5a2ea60623ec2af745ce5f46589cce17.jpg",
    "https://i.pinimg.com/236x/e5/3e/d5/e53ed55b2437df87d184031f2b808ff3.jpg",
    "https://i.pinimg.com/1200x/e5/3e/d5/e53ed55b2437df87d184031f2b808ff3.jpg",
    "https://i.pinimg.com/736x/c3/2e/f1/c32ef1f27cda3e8f21fc18e6d5d39fbe.jpg",
    "https://i.pinimg.com/1200x/c3/2e/f1/c32ef1f27cda3e8f21fc18e6d5d39fbe.jpg"
  ],
  "Services homme": [
    "https://i.pinimg.com/736x/c3/29/1b/c3291b4abcf5ea6045e298f94770c113.jpg",
    "https://i.pinimg.com/1200x/c3/29/1b/c3291b4abcf5ea6045e298f94770c113.jpg",
    "https://i.pinimg.com/736x/3b/bc/e5/3bbce57c9cc011b7ec3ce630e2abd72d.jpg",
    "https://i.pinimg.com/1200x/3b/bc/e5/3bbce57c9cc011b7ec3ce630e2abd72d.jpg",
    "https://i.pinimg.com/736x/44/db/49/44db496251886d203ee3c568972624cf.jpg",
    "https://i.pinimg.com/1200x/44/db/49/44db496251886d203ee3c568972624cf.jpg"
  ],
  "Soins homme": [
    "https://i.pinimg.com/736x/44/db/49/44db496251886d203ee3c568972624cf.jpg",
    "https://i.pinimg.com/1200x/44/db/49/44db496251886d203ee3c568972624cf.jpg",
    "https://i.pinimg.com/736x/ec/a5/d1/eca5d1f405a7d27843d24a943d6dc005.jpg",
    "https://i.pinimg.com/1200x/ec/a5/d1/eca5d1f405a7d27843d24a943d6dc005.jpg"
  ],
  "Manucure": [
    "https://i.pinimg.com/1200x/f8/9a/7d/f89a7dea0cb8d35b0edfa45a51c1c5d9.jpg",
    "https://i.pinimg.com/736x/f8/9a/7d/f89a7dea0cb8d35b0edfa45a51c1c5d9.jpg",
    "https://i.pinimg.com/736x/5a/2e/a6/5a2ea60623ec2af745ce5f46589cce17.jpg",
    "https://i.pinimg.com/1200x/5a/2e/a6/5a2ea60623ec2af745ce5f46589cce17.jpg",
    "https://i.pinimg.com/736x/63/df/69/63df699ff1eae5d33ae08f374fd98833.jpg"
  ],
  "Pedicure": [
    "https://i.pinimg.com/736x/44/69/06/4469060fa92334d65b5d73074338cac3.jpg",
    "https://i.pinimg.com/1200x/44/69/06/4469060fa92334d65b5d73074338cac3.jpg",
    "https://i.pinimg.com/236x/e5/3e/d5/e53ed55b2437df87d184031f2b808ff3.jpg",
    "https://i.pinimg.com/1200x/e5/3e/d5/e53ed55b2437df87d184031f2b808ff3.jpg",
    "https://i.pinimg.com/736x/5e/62/dc/5e62dc876e569863f27db070cbb9ec52.jpg"
  ],
  "Makeup": [
    "https://i.pinimg.com/1200x/44/db/49/44db496251886d203ee3c568972624cf.jpg",
    "https://i.pinimg.com/736x/44/db/49/44db496251886d203ee3c568972624cf.jpg",
    "https://i.pinimg.com/736x/ec/a5/d1/eca5d1f405a7d27843d24a943d6dc005.jpg",
    "https://i.pinimg.com/1200x/ec/a5/d1/eca5d1f405a7d27843d24a943d6dc005.jpg",
    "https://i.pinimg.com/1200x/63/df/69/63df699ff1eae5d33ae08f374fd98833.jpg"
  ],
  default: [
    "https://i.pinimg.com/736x/e5/87/8d/e5878d5ed2dd095282d8f95395b8bbf7.jpg",
    "https://i.pinimg.com/736x/c3/29/1b/c3291b4abcf5ea6045e298f94770c113.jpg",
    "https://i.pinimg.com/736x/3b/bc/e5/3bbce57c9cc011b7ec3ce630e2abd72d.jpg",
    "https://i.pinimg.com/736x/44/69/06/4469060fa92334d65b5d73074338cac3.jpg"
  ]
};
const defaultImage = "https://i.pinimg.com/736x/e5/87/8d/e5878d5ed2dd095282d8f95395b8bbf7.jpg";

const categoryImageCounters = {};

const asset = (value, category) => {
  if (typeof value !== "string") return defaultImage;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  const images = categoryImages[category] || categoryImages.default;
  const index = categoryImageCounters[category] || 0;
  categoryImageCounters[category] = index + 1;
  return images[index % images.length];
};
const whatsappNumber = "242068645571";

const seedServices = [
  ["Tresses africaines", "Tressage soigne avec finition premium.", 5000, "Services femme", "https://i.pinimg.com/736x/a6/47/8f/a6478f563e683903e0fb12853aaaf2fc.jpg"],
  ["Nattes collees", "Nattes precises pour look net et durable.", 1000, "Services femme", "https://i.pinimg.com/736x/f2/51/ad/f251ad122840fcbf4cf58abbdf8c4124.jpg"],
  ["Vanilles", "Twists elegants sur cheveux naturels.", 3000, "Services femme", "https://i.pinimg.com/736x/b0/e3/a2/b0e3a24414a8a6a559911f298dc8c5c0.jpg"],
  ["Tissages", "Pose naturelle, volume et finition invisible.", 10000, "Services femme", "https://i.pinimg.com/1200x/d7/a4/b5/d7a4b5bd620ef163ddad289a94ecfd49.jpg"],
  ["Pose de perruque", "Installation ajustee avec rendu naturel.", 10000, "Services femme", "https://i.pinimg.com/736x/d3/26/58/d32658890fcac6189ccd0a9dad0e4a3c.jpg"],
  ["Brushing", "Mise en forme lisse et lumineuse.", 1000, "Services femme", "https://i.pinimg.com/736x/3d/95/2b/3d952bbe7deb6267c9fc6677119f5a4e.jpg"],
  ["Lissage", "Lissage soyeux avec protection capillaire.", 10000, "Services femme", "https://i.pinimg.com/736x/2d/fa/52/2dfa522b5ad043bff11f7f43ecd58981.jpg"],
  ["Defrisage", "Texture maitrisee et soin protecteur.", 10000, "Services femme", "https://i.pinimg.com/736x/2c/91/46/2c91468c2ba4e2f0156055b9196497a5.jpg"],
  ["Coloration", "Couleur profonde et conseil de nuance.", 10000, "Services femme", "https://i.pinimg.com/1200x/8b/25/51/8b2551f8c3e371f946a8f331ff46b60b.jpg"],
  ["Balayage", "Reflets lumineux et dimensions naturelles.", 10000, "Services femme", "https://i.pinimg.com/736x/4d/61/4b/4d614b216e21a70e5aed935f19a9d39a.jpg"],
  ["Ombre hair", "Degrade couleur moderne et doux.", 10000, "Services femme", "https://i.pinimg.com/1200x/fb/e4/2f/fbe42fd3e91888ded402b67f7c7e75b2.jpg"],
  ["Chignon", "Chignon chic pour sortie ou ceremonie.", 18000, "Services femme", "https://i.pinimg.com/736x/df/85/47/df8547fde4f967e6403e585791f5bcb5.jpg"],
  ["Coiffure mariage", "Creation ceremonie avec finition luxe.", 10000, "Services femme", "https://i.pinimg.com/1200x/07/34/c9/0734c9f94d556e21a276e96bdfdd97a8.jpg"],
  ["Coupe femme moderne", "Coupe structuree selon le visage.", 1000, "Services femme", "https://i.pinimg.com/1200x/38/b1/17/38b117a371737010dba004f220aed870.jpg"],
  ["Boucles", "Boucles definies, souples et brillantes.", 1000, "Services femme", "https://i.pinimg.com/736x/d5/d8/f0/d5d8f006bf0ed44e2382035c83fdc496.jpg"],
  ["Silk press", "Effet soie sur cheveux naturels.", 10000, "Services femme", "https://i.pinimg.com/1200x/f0/85/81/f0858110465575bd9b35ff2d7f8060fb.jpg"],
  ["Coiffure afro", "Volume, definition et signature afro.", 10000, "Services femme", "https://i.pinimg.com/1200x/76/b9/55/76b955c9443bbf3e8318460830089a4d.jpg"],
  ["Coiffure evenementielle", "Style photo-ready pour evenement.", 10000, "Services femme", "https://i.pinimg.com/736x/82/a4/ca/82a4ca12f275b667348c786eb9111b27.jpg"],
  ["Soin hydratant", "Hydratation intense et brillance.", 10000, "Soins femme", "https://i.pinimg.com/736x/f3/d4/cc/f3d4cc5799782fcb703b733409dab268.jpg"],
  ["Soin keratine", "Renforcement et discipline de la fibre.", 10000, "Soins femme", "https://i.pinimg.com/1200x/19/43/b1/1943b19a4d4c1a85ce85b8c2c9835b60.jpg"],
  ["Botox capillaire", "Reparation, souplesse et eclat.", 30000, "Soins femme", "https://i.pinimg.com/236x/77/5c/ce/775cce1585d17f04f52cce504900b8e4.jpg"],
  ["Soin cheveux abimes", "Routine reparatrice ciblee.", 18000, "Soins femme", "https://i.pinimg.com/1200x/89/9c/1f/899c1f080e519dedb881e7f367446abf.jpg"],
  ["Soin anti-chute", "Protocole fortifiant du cuir chevelu.", 18000, "Soins femme", "https://i.pinimg.com/1200x/7c/16/22/7c16227bc75c3ca7494d71cb8ed422d9.jpg"],
  ["Massage capillaire", "Detente et stimulation du cuir chevelu.", 9000, "Soins femme", "https://i.pinimg.com/1200x/76/71/93/767193e45e65b5ea16e4f99bf9dbd1f5.jpg"],
  ["Spa cheveux", "Experience soin complete et relaxante.", 5000, "Soins femme", "https://i.pinimg.com/236x/dc/ba/69/dcba69f41ba80b117edf4f677714b0d8.jpg"],
  ["Traitement cheveux naturels", "Nutrition adaptee aux cheveux naturels.", 5000, "Soins femme", "https://i.pinimg.com/1200x/69/70/f9/6970f9da7f3fb18b7aa6900bebf82bc8.jpg"],
  ["Soin nourrissant", "Masque profond et protection.", 12000, "Soins femme", "https://i.pinimg.com/1200x/96/9b/98/969b986004b19693daaf822f020dbb59.jpg"],
  ["Soin cheveux colores", "Protection couleur et eclat durable.", 14000, "Soins femme", "https://i.pinimg.com/1200x/0b/40/e1/0b40e1ce3a9d41b1d325bf7ce853dee2.jpg"],
  ["Coupe classique", "Coupe propre et intemporelle.", 6000, "Services homme", "https://i.pinimg.com/1200x/0d/f3/5a/0df35a405a583d650b561657a15b5933.jpg"],
  ["Degrade americain", "Degrade fondu, net et moderne.", 8000, "Services homme", "https://i.pinimg.com/1200x/2b/7b/a9/2b7ba99f5a590c238488f65363764200.jpg"],
  ["Coupe moderne", "Style actuel adapte au visage.", 8000, "Services homme", "https://i.pinimg.com/736x/25/cf/4f/25cf4f26cc0e272f455db3e388ef05fa.jpg"],
  ["Coupe VIP", "Diagnostic, coupe, shampoing et finition.", 15000, "Services homme", "https://i.pinimg.com/1200x/1d/89/65/1d8965afd7d515ee1cfaa733bc3ccc0e.jpg"],
  ["Rasage", "Rasage precis avec serviette chaude.", 5000, "Services homme", "https://i.pinimg.com/736x/2f/9d/99/2f9d9956cbd1774a8da549d99deb87ce.jpg"],
  ["Taille de barbe", "Barbe structuree et contours propres.", 5000, "Services homme", "https://i.pinimg.com/1200x/a5/2d/ac/a52dac3f501f1546b592985542b6c2c6.jpg"],
  ["Contours", "Lignes nettes pour finition impeccable.", 3000, "Services homme", "https://i.pinimg.com/736x/40/06/07/400607e021bb72c5ba3084f67a666bb4.jpg"],
  ["Locks homme", "Depart, entretien et finition locks.", 5000, "Services homme", "https://i.pinimg.com/1200x/03/0f/21/030f213db86e723aa089e17f3a6fd8e4.jpg"],
  ["Twist", "Twist homme propre et durable.", 12000, "Services homme", "https://i.pinimg.com/1200x/6e/64/ba/6e64ba220a04e9f13efc7804a0483dd0.jpg"],
  ["Waves", "Routine waves avec finition brillante.", 10000, "Services homme", "https://i.pinimg.com/1200x/4b/a3/df/4ba3df779e405132f4e65db49b7fd375.jpg"],
  ["Coloration homme", "Couleur masculine nuancee.", 15000, "Services homme", "https://i.pinimg.com/1200x/c2/1c/a8/c21ca822c93edf6c38946755b0a0ce87.jpg"],
  ["Shampooing homme", "Lavage relaxant et soin leger.", 4000, "Services homme", "https://i.pinimg.com/1200x/0a/be/9a/0abe9a3bb9642770afe6eece38cd9077.jpg"],
  ["Coupe enfant", "Coupe douce et soignee.", 5000, "Services homme", "https://i.pinimg.com/736x/25/54/de/2554def82614f990e7b117cb2abdf416.jpg"],
  ["Soin barbe", "Soin profond pour barbe douce.", 8000, "Soins homme", "https://i.pinimg.com/1200x/f6/65/ae/f665ae4c92086d54449889c13ca71dbe.jpg"],
  ["Hydratation barbe", "Hydratation et parfum subtil.", 6000, "Soins homme", "https://i.pinimg.com/1200x/11/9c/11/119c116487fc0ac8bc42f49ac71308de.jpg"],
  ["Soin capillaire homme", "Soin cuir chevelu et fibre.", 10000, "Soins homme", "https://i.pinimg.com/1200x/8d/86/08/8d86081cae93e781caf9967641a77382.jpg"],
  ["Massage cuir chevelu", "Massage relaxant et stimulant.", 7000, "Soins homme", "https://i.pinimg.com/1200x/34/48/7f/34487f3e56cb380c7a7c35c3b0609cb8.jpg"],
  ["Traitement anti-pelliculaire", "Purification et confort du cuir chevelu.", 12000, "Soins homme", "https://i.pinimg.com/736x/f7/34/50/f7345076eaa2ad97114baba15b1cd2c9.jpg"],
  ["Traitement anti-chute homme", "Programme fortifiant homme.", 15000, "Soins homme", "https://i.pinimg.com/1200x/30/76/5d/30765d53de7c70a81e8e4ecc0a0ec127.jpg"],
  ["Manucure simple", "Nettoyage, forme et finition.", 6000, "Manucure", "https://i.pinimg.com/736x/ff/a5/9c/ffa59c4bd8c1be48d2028a01a83446f5.jpg"],
  ["Manucure luxe", "Soin complet mains et ongles.", 6000, "Manucure", "https://i.pinimg.com/1200x/24/2f/4e/242f4eef9908208bc3722f2c3ea996df.jpg"],
  ["Pose gel", "Pose gel elegante et durable.", 5000, "Manucure", "https://i.pinimg.com/1200x/c2/27/89/c22789577f6ae51b85bc0c2923381edc.jpg"],
  ["Pose capsules", "Longueur et forme sur mesure.", 8000, "Manucure", "https://i.pinimg.com/1200x/7a/59/45/7a5945f6391770f8732777f02d74d42f.jpg"],
  ["Vernis simple", "Couleur rapide et propre.", 4000, "Manucure", "https://i.pinimg.com/1200x/2f/c8/8d/2fc88de75cbb9fc38f7a076c3af646ef.jpg"],
  ["Vernis semi-permanent", "Brillance longue tenue.", 7000, "Manucure", "https://i.pinimg.com/736x/62/bc/57/62bc576db404b0c8a8254c2ecb184842.jpg"],
  ["Nail art", "Details artistiques personnalises.", 10000, "Manucure", "https://i.pinimg.com/736x/aa/e7/a5/aae7a5a15fb8ae7467d7d1a73132d8d0.jpg"],
  ["Ongles acryliques", "Structure solide et finition premium.", 6000, "Manucure", "https://i.pinimg.com/736x/e2/de/3d/e2de3d08d8c647fa7fc137c66df0795a.jpg"],
  ["French manucure", "French nette, chic et moderne.", 10000, "Manucure", "https://i.pinimg.com/1200x/61/ff/2a/61ff2a2e0bee1ebd0c9a8cd3fc0ce0ba.jpg"],
  ["Reparation ongles", "Correction rapide et invisible.", 3000, "Manucure", "https://i.pinimg.com/736x/a5/7f/92/a57f9261f0f7cab133b207358bcef1a4.jpg"],
  ["Pedicure simple", "Soin pieds essentiel.", 7000, "Pedicure", "https://i.pinimg.com/1200x/8a/9f/24/8a9f2403cc708fca920718ace9026961.jpg"],
  ["Pedicure spa", "Bain, soin et relaxation.", 15000, "Pedicure", "https://i.pinimg.com/1200x/55/de/06/55de061932671b34b2e223fe8cf2e419.jpg"],
  ["Soin des pieds", "Confort, douceur et proprete.", 10000, "Pedicure", "https://i.pinimg.com/736x/31/46/32/314632586314da7087552bb8fc168d55.jpg"],
  ["Gommage pieds", "Exfoliation et peau lisse.", 8000, "Pedicure", "https://i.pinimg.com/736x/b9/31/9f/b9319f569307e68d4e86f89705eaa6b3.jpg"],
  ["Massage pieds", "Moment relaxant et profond.", 8000, "Pedicure", "https://i.pinimg.com/1200x/27/55/8a/27558a9ba8783bb5bb307dfdf879bf52.jpg"],
  ["Vernis pieds", "Couleur elegante pour les pieds.", 4000, "Pedicure", "https://i.pinimg.com/1200x/9b/fd/1a/9bfd1a571a6e99aacf01f9165cdd6438.jpg"],
  ["Traitement talons abimes", "Soin reparateur intensif.", 10000, "Pedicure", "https://i.pinimg.com/736x/7c/c6/21/7cc621bb237555231a84da0a9e73234e.jpg"],
  ["Maquillage simple", "Mise en beaute naturelle.", 10000, "Makeup", "https://i.pinimg.com/736x/66/40/03/66400389d8d1dd8cc712c21a217aa290.jpg"],
  ["Makeup mariage", "Look mariee premium et photo-ready.", 35000, "Makeup", "https://i.pinimg.com/1200x/4e/31/60/4e3160ffed91649027bdc52786fc5235.jpg"],
  ["Makeup soiree", "Glamour intense pour sortie.", 10000, "Makeup", "https://i.pinimg.com/736x/37/a0/77/37a07726ae5359a907fbf776d62bfef0.jpg"],
  ["Makeup evenementiel", "Mise en beaute adaptee a l'evenement.", 22000, "Makeup", "https://i.pinimg.com/1200x/52/01/75/520175f729f06384d4a25a428cc2dd69.jpg"],
  ["Makeup naturel", "Glow subtil et lumineux.", 12000, "Makeup", "https://i.pinimg.com/736x/3e/23/f0/3e23f038ef3f610706e538cffb35ace1.jpg"],
  ["Pose faux cils", "Regard intense et propre.", 3000, "Makeup", "https://i.pinimg.com/1200x/47/04/f1/4704f19f48e0964da0389ad75636b46f.jpg"],
  ["Contouring", "Sculpture du visage et lumiere.", 8000, "Makeup", "https://i.pinimg.com/1200x/64/55/20/645520d0672cb53a6a53377dcec0e505.jpg"],
  ["Glam makeup", "Look glamour haute intensite.", 25000, "Makeup", "https://i.pinimg.com/736x/29/63/00/2963005b48f64c5a95852212f782de38.jpg"],
  ["Retouche maquillage", "Retouche rapide avant shooting ou sortie.", 6000, "Makeup", "https://i.pinimg.com/736x/28/cf/fe/28cffe7b33ebd93238ed70efd80c956b.jpg"]

].map((item, index) => ({
  id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${index}`,
  name: item[0],
  description: item[1],
  price: item[2],
  category: item[3],
  image: asset(item[4], item[3])
}));

let services = JSON.parse(localStorage.getItem("geokim-services") || "null") || seedServices;
let testimonialIndex = 0;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const formatPrice = (price) => `${Number(price).toLocaleString("fr-FR")} FCFA`;

const testimonials = [
  { name: "Prisca M.", text: "Le silk press etait impeccable. Accueil doux, salon magnifique, resultat tres premium.", img: asset("https://i.pinimg.com/736x/28/cf/fe/28cffe7b33ebd93238ed70efd80c956b.jpg") },
  { name: "Joachim K.", text: "Degrade americain parfait, contours propres. On sent le niveau barber shop haut de gamme.", img: asset("https://i.pinimg.com/736x/a7/73/4f/a7734f7af1d83b4207c3a6a4ea5f8351.jpg") },
  { name: "Mireille B.", text: "Makeup mariage sublime et tenue incroyable. Toute l'equipe a ete professionnelle.", img: asset("https://i.pinimg.com/1200x/ef/1d/11/ef1d11fd9a88480449ae864bf12be001.jpg") }
];

function saveServices() {
  localStorage.setItem("geokim-services", JSON.stringify(services));
}

function categories() {
  return ["Toutes", ...new Set(services.map((service) => service.category))];
}

function populateFilters() {
  const categoryFilter = qs("#categoryFilter");
  const current = categoryFilter.value || "Toutes";
  categoryFilter.innerHTML = categories().map((cat) => `<option value="${cat}">${cat}</option>`).join("");
  categoryFilter.value = categories().includes(current) ? current : "Toutes";

  const bookingService = qs("#bookingService");
  bookingService.innerHTML = services.map((service) => `<option value="${service.name}">${service.name} - ${formatPrice(service.price)}</option>`).join("");
}

function renderServices() {
  const grid = qs("#servicesGrid");
  const search = qs("#serviceSearch").value.toLowerCase().trim();
  const category = qs("#categoryFilter").value || "Toutes";
  const filtered = services.filter((service) => {
    const matchesSearch = [service.name, service.description, service.category].join(" ").toLowerCase().includes(search);
    const matchesCategory = category === "Toutes" || service.category === category;
    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered.map((service) => `
    <article class="service-card" data-aos="fade-up">
      <img src="${service.image}" alt="${service.name}">
      <div class="service-body">
        <span class="category-pill">${service.category}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="service-meta"><span>${formatPrice(service.price)}</span><span><i class="fa-solid fa-star"></i> Premium</span></div>
        <a class="btn btn-primary" href="#reservation" data-book="${service.name}"><i class="fa-solid fa-calendar-check"></i> Reserver</a>
      </div>
    </article>
  `).join("");

  qsa("[data-book]").forEach((button) => {
    button.addEventListener("click", () => {
      qs("#bookingService").value = button.dataset.book;
    });
  });
}

function renderAdmin() {
  const body = qs("#adminTableBody");
  body.innerHTML = services.map((service) => `
    <tr>
      <td>${service.name}</td>
      <td>${service.category}</td>
      <td>${formatPrice(service.price)}</td>
      <td>
        <div class="table-actions">
          <button class="icon-btn" data-edit="${service.id}" aria-label="Modifier ${service.name}"><i class="fa-solid fa-pen"></i></button>
          <button class="icon-btn" data-delete="${service.id}" aria-label="Supprimer ${service.name}"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join("");

  qsa("[data-edit]").forEach((button) => button.addEventListener("click", () => fillForm(button.dataset.edit)));
  qsa("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteService(button.dataset.delete)));
}

function syncUI() {
  populateFilters();
  renderServices();
  renderAdmin();
}

function fillForm(id) {
  const service = services.find((item) => item.id === id);
  if (!service) return;
  qs("#serviceId").value = service.id;
  qs("#serviceName").value = service.name;
  qs("#serviceDescription").value = service.description;
  qs("#servicePrice").value = service.price;
  qs("#serviceCategory").value = service.category;
  qs("#serviceImage").value = service.image;
  qs("#serviceForm").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteService(id) {
  services = services.filter((service) => service.id !== id);
  saveServices();
  syncUI();
}

function reservationMessage() {
  const name = qs("#bookingName").value || "";
  const service = qs("#bookingService").value || "";
  const date = qs("#bookingDate").value || "";
  const time = qs("#bookingTime").value || "";
  return `Bonjour GEOKIM-HAIR,\nJe souhaite reserver une prestation.\n\nNom : ${name}\nService : ${service}\nDate : ${date}\nHeure : ${time}\n\nMerci.`;
}

function openWhatsapp() {
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reservationMessage())}`, "_blank");
}

function renderTestimonial() {
  const item = testimonials[testimonialIndex];
  qs("#testimonialCard").innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
    <p>${item.text}</p>
  `;
}

function initGallery() {
  const lightbox = qs("#lightbox");
  const lightboxImg = qs("#lightbox img");
  qsa("#galleryGrid img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });
  qs("#lightbox button").addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.classList.remove("show");
  });
}

function initEvents() {
  qs("#menuToggle").addEventListener("click", () => qs("#nav").classList.toggle("open"));
  qsa(".nav a").forEach((link) => link.addEventListener("click", () => qs("#nav").classList.remove("open")));
  qs("#serviceSearch").addEventListener("input", renderServices);
  qs("#categoryFilter").addEventListener("change", renderServices);
  qs("#adminToggle").addEventListener("click", () => {
    const panel = qs("#admin");
    const isHidden = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !isHidden);
    qs("#adminToggle").classList.toggle("active", isHidden);
    qs("#adminToggle").setAttribute("aria-expanded", String(isHidden));
    if (isHidden) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  qs("#serviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = qs("#serviceId").value || (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString());
    const service = {
      id,
      name: qs("#serviceName").value.trim(),
      description: qs("#serviceDescription").value.trim(),
      price: Number(qs("#servicePrice").value),
      category: qs("#serviceCategory").value.trim(),
      image: qs("#serviceImage").value.trim()
    };
    const index = services.findIndex((item) => item.id === id);
    if (index >= 0) services[index] = service;
    else services.unshift(service);
    qs("#serviceForm").reset();
    qs("#serviceId").value = "";
    saveServices();
    syncUI();
  });

  qs("#resetServices").addEventListener("click", () => {
    services = seedServices;
    saveServices();
    syncUI();
  });

  qs("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    qs("#successModal").classList.add("show");
  });
  qs("#closeModal").addEventListener("click", () => qs("#successModal").classList.remove("show"));
  qs("#bookingWhatsapp").addEventListener("click", openWhatsapp);
  qs("#floatingWhatsapp").addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsapp();
  });

  qs("#prevTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  qs("#nextTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  });

  qs("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    qs("#scrollProgress").style.width = `${(window.scrollY / max) * 100}%`;
    qs("#toTop").classList.toggle("show", window.scrollY > 700);
    qs("#siteHeader").classList.toggle("scrolled", window.scrollY > 80);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => qs("#loader").classList.add("hide"), 550);
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) AOS.init({ duration: 850, once: true, offset: 80 });
  syncUI();
  renderTestimonial();
  initGallery();
  initEvents();
});
