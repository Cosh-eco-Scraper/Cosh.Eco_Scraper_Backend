const englishKeywords = [
  'about',
  'about us',
  'intro',
  'brand',
  'brands',
  'company',
  'our story',
  'mission',
  'vision',
  'values',
  'team',
  'staff',
  'history',
  'careers',
  'jobs',
  'press',
  'news',
  'blog',
  'faq',
  'frequently asked questions',
  'what we do',
  'location',
  'address',
  'open',
  'opening',
  'hour',
  'hours',
  'time',
  'times',
  'opening hours',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'closed',
  'directions',
  'map',
  'find us',
  'store',
  'stores',
  'shop',
  'shops',
  'business hours',
  'schedule',
  'return',
  'returns',
  'policy',
  'policies',
  'refund',
  'exchange',
  'shipping',
  'delivery',
  'warranty',
  'guarantee',
  'disclaimer',
  'cancellation',
  'contact',
  'contacts',
  'support',
  'help',
  'customer service',
  'get in touch',
  'reach us',
  'inquiry',
  'complaint',
  'assistance',
  'department',
  'departments',
  'home',
  'products',
  'services',
];

const frenchKeywords = [
  'à propos',
  'à propos de nous',
  'introduction',
  'marque',
  'marques',
  'entreprise',
  'notre histoire',
  'mission',
  'vision',
  'valeurs',
  'équipe',
  'personnel',
  'histoire',
  'carrières',
  'emplois',
  'presse',
  'actualités',
  'blog',
  'faq',
  'questions fréquentes',
  'ce que nous faisons',
  'emplacement',
  'adresse',
  'ouvert',
  'ouverture',
  'heure',
  'heures',
  'horaire',
  'horaires',
  "heures d'ouverture",
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
  'dimanche',
  'fermé',
  'itinéraire',
  'carte',
  'nous trouver',
  'magasin',
  'magasins',
  'boutique',
  'boutiques',
  'heures de bureau',
  'programme',
  'retour',
  'retours',
  'politique',
  'politiques',
  'remboursement',
  'échange',
  'expédition',
  'livraison',
  'garantie',
  'garanties',
  'avertissement',
  'annulation',
  'contact',
  'contacts',
  'support',
  'aide',
  'service client',
  'nous contacter',
  'joindre',
  'demande',
  'réclamation',
  'assistance',
  'département',
  'départements',
  'accueil',
  'produits',
  'services',
];

const germanKeywords = [
  'über',
  'über uns',
  'einführung',
  'marke',
  'marken',
  'unternehmen',
  'unsere geschichte',
  'mission',
  'vision',
  'werte',
  'team',
  'personal',
  'geschichte',
  'karriere',
  'jobs',
  'presse',
  'nachrichten',
  'blog',
  'faq',
  'häufig gestellte fragen',
  'was wir tun',
  'standort',
  'adresse',
  'offen',
  'öffnung',
  'stunde',
  'stunden',
  'zeit',
  'zeiten',
  'öffnungszeiten',
  'montag',
  'dienstag',
  'mittwoch',
  'donnerstag',
  'freitag',
  'samstag',
  'sonntag',
  'geschlossen',
  'wegbeschreibung',
  'karte',
  'finden sie uns',
  'geschäft',
  'geschäfte',
  'laden',
  'läden',
  'geschäftszeiten',
  'zeitplan',
  'rückgabe',
  'retoure',
  'richtlinie',
  'richtlinien',
  'erstattung',
  'umtausch',
  'versand',
  'lieferung',
  'garantie',
  'gewährleistung',
  'haftungsausschluss',
  'stornierung',
  'kontakt',
  'kontakte',
  'support',
  'hilfe',
  'kundenservice',
  'kontaktieren sie uns',
  'erreichen sie uns',
  'anfrage',
  'beschwerde',
  'unterstützung',
  'abteilung',
  'abteilungen',
  'startseite',
  'produkte',
  'dienstleistungen',
];

const dutchKeywords = [
  'over',
  'over ons',
  'intro',
  'merk',
  'merken',
  'bedrijf',
  'ons verhaal',
  'missie',
  'visie',
  'waarden',
  'team',
  'personeel',
  'geschiedenis',
  'carrières',
  'vacatures',
  'pers',
  'nieuws',
  'blog',
  'faq',
  'veelgestelde vragen',
  'wat we doen',
  'locatie',
  'adres',
  'open',
  'opening',
  'uur',
  'uren',
  'tijd',
  'tijden',
  'openingstijden',
  'maandag',
  'dinsdag',
  'woensdag',
  'donderdag',
  'vrijdag',
  'zaterdag',
  'zondag',
  'gesloten',
  'routebeschrijving',
  'kaart',
  'vind ons',
  'winkel',
  'winkels',
  'zaak',
  'zaken',
  'kantooruren',
  'schema',
  'retour',
  'retouren',
  'beleid',
  'voorwaarden',
  'terugbetaling',
  'ruilen',
  'verzending',
  'bezorging',
  'garantie',
  'waarborg',
  'disclaimer',
  'annulering',
  'contact',
  'contacten',
  'support',
  'hulp',
  'klantenservice',
  'neem contact op',
  'bereik ons',
  'vraag',
  'klacht',
  'assistentie',
  'afdeling',
  'afdelingen',
  'home',
  'producten',
  'diensten',
];

const keywords = {
  getEnglishKeywords: () => englishKeywords,
  getDutchKeywords: () => dutchKeywords,
  getGermanKeywords: () => germanKeywords,
  getFrenchKeywords: () => frenchKeywords,
};

export default function getKeywords(language: string) {
  switch (language) {
    case 'en':
      return keywords.getEnglishKeywords();
    case 'nl':
      return keywords.getDutchKeywords();
    case 'de':
      return keywords.getGermanKeywords();
    case 'fr':
      return keywords.getFrenchKeywords();
    default:
      return keywords.getEnglishKeywords();
  }
}
