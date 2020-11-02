<?php

namespace Drupal\wyg_static;

/**
 * Class StaticController.
 *
 * @package Drupal\wyg_static\Controller
 */
class AssociationData
{
  const data = [
    'example' => [
      'association_key' => 'example',
      'display_name' => 'Example Farm Credit',
      'logo_filename' => 'logo-fce.png',
      'phone' => '1 (800) 888-9999',
      'mobile_phone' => '18008889999',
      'address' => [
        'street' => '123 Address St.',
        'city' => 'Anytown',
        'state' => 'NC',
        'zip' => '99999'
      ],
      'form' => [
        'id_for_home_page' => 'id-for-homepage-form',
        'id_for_contact_page' => 'id-for-contact-form',
        'loc' => 'this is required, should be provided from client\'s click dimensions account'
      ],
      'legal' => [
        'privacy' => '#',
        'ccpa' => '#',
        'disclosures' => '#'
      ],
      'article_download' => 'https://example.com'
    ],
    'arb' => [
      'association_key' => 'arb',
      'display_name' => 'ArborOne Farm Credit',
      'logo_filename' => 'logo-arb.svg',
      'phone' => '1-843-662-1527',
      'mobile_phone' => '18436621527',
      'address' => [
        'street' => '800 Woody Jones Blvd.',
        'city' => 'Florence',
        'state' => 'SC',
        'zip' => '29501'
      ],
      'form' => [
        'id_for_home_page' => 'xsedvbrseeubhabqvqmqfa',
        'id_for_contact_page' => 'asgtubrteeubfgbqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstnet-a2yf4/pages/'
      ],
      'legal' => [
        'privacy' => 'https://www.arborone.com/legal/privacy-policy.aspx',
        'ccpa' => 'https://www.arborone.com/legal/california-consumer-privacy-act.aspx',
        'disclosures' => 'https://www.arborone.com/legal/equal-housing-lender.aspx'
      ],
      'article_download' => '/pdf/arb/ArborOne-WYG-GetStartedDownload.pdf'
    ],
    'col' => [
      'association_key' => 'col',
      'display_name' => 'Colonial Farm Credit',
      'logo_filename' => 'logo-col.svg',
      'phone' => '1-804-746-1252',
      'mobile_phone' => '18047461252',
      'address' => [
        'street' => '7104 Mechanicsville Turnpike',
        'city' => 'Mechanicsville',
        'state' => 'VA',
        'zip' => '23111'
      ],
      'form' => [
        'id_for_home_page' => '4emzhrueeubhabqvqmqfa',
        'id_for_contact_page' => 'lzmnfbrveeubfgbqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstnet-a2cm6/pages/'
      ],
      'legal' => [
        'privacy' => 'https://www.colonialfarmcredit.com/privacy',
        'ccpa' => 'https://www.colonialfarmcredit.com/california-consumer-privacy-act-ccpa',
        'disclosures' => 'https://www.colonialfarmcredit.com/disclosures'
      ],
      'article_download' => '/pdf/col/Colonial-WYG-GetStartedDownload.pdf'
    ],
    'eca' => [
      'association_key' => 'eca',
      'display_name' => 'AgCarolina Farm Credit',
      'logo_filename' => 'logo-eca.svg',
      'phone' => '1-833-875-6703',
      'mobile_phone' => '18338756703',
      'address' => [
        'street' => '4000 Poole Road.',
        'city' => 'Raleigh',
        'state' => 'NC',
        'zip' => '27610'
      ],
      'form' => [
        'id_for_home_page' => 'h1dq5rrteeubhabqvqmqfa',
        'id_for_contact_page' => 'x6mp2brteeubfgbqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstnet-azylb/pages/'
      ],
      'legal' => [
        'privacy' => 'https://www.agcarolina.com/privacy-policy',
        'ccpa' => 'https://www.agcarolina.com/ca-consumer-privacy-act',
        'disclosures' => 'https://www.agcarolina.com/equal-housing-lender'
      ],
      'article_download' => '/pdf/eca/AgCarolina-WYG-GetStartedDownload.pdf'
    ],
    'fcv' => [
      'association_key' => 'fcv',
      'display_name' => 'Farm Credit of the Virginias',
      'logo_filename' => 'logo-fcv.svg',
      'phone' => '1-800-919-3276',
      'mobile_phone' => '18009193276',
      'address' => [
        'street' => '106 Sangers Lane',
        'city' => 'Staunton',
        'state' => 'VA',
        'zip' => '24401'
      ],
      'form' => [
        'id_for_home_page' => 'xwnmfbhteeubgabqvqmudq',
        'id_for_contact_page' => 'fmoplhhueeubgabqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstcom-apvv2/pages/'
      ],
      'legal' => [
        'privacy' => 'https://www.farmcreditofvirginias.com/privacy-security',
        'ccpa' => 'https://www.farmcreditofvirginias.com/california-consumer-privacy-act-ccpa',
        'disclosures' => 'https://www.farmcreditofvirginias.com/legal-disclosures'
      ],
      'article_download' => '/pdf/fcv/FCVA-WYG-GetStartedDownload.pdf'
    ],
    'nwf' => [
      'association_key' => 'nwf',
      'display_name' => 'Farm Credit of Northwest Florida',
      'logo_filename' => 'logo-nwf.svg',
      'phone' => '1-800-315-1580',
      'mobile_phone' => '18003151580',
      'address' => [
        'street' => '5052 Highway 90 East',
        'city' => 'Marianna',
        'state' => 'FL',
        'zip' => '32446'
      ],
      'form' => [
        'id_for_home_page' => 'hpvnkhjleeubfgbqvqmudq',
        'id_for_contact_page' => '41f2lxrneeubfgbqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstcom-asvkl/pages/'
      ],
      'legal' => [
        'privacy' => 'https://farmcredit-fl.com/Legal/Privacy.aspx',
        'ccpa' => 'https://farmcredit-fl.com/Legal/Privacy.aspx',
        'disclosures' => 'https://farmcredit-fl.com/Legal/Disclosures.aspx'
      ],
      'article_download' => '/pdf/nwf/NWFL-WYG-GetStartedDownload.pdf'
    ],
    'swg' => [
      'association_key' => 'swg',
      'display_name' => 'Southwest Georgia Farm Credit',
      'logo_filename' => 'logo-swg.svg',
      'phone' => '1-229-493-0921',
      'mobile_phone' => '12294930921',
      'address' => [
        'street' => '305 Colquitt Highway',
        'city' => 'Bainbridge',
        'state' => 'GA',
        'zip' => '39817'
      ],
      'form' => [
        'id_for_home_page' => '2npizbrreeubhabqvqmqfa',
        'id_for_contact_page' => 'okmu0brseeubfgbqvqmudq',
        'loc' => 'https://analytics.clickdimensions.com/agfirstnet-afh6x/pages/'
      ],
      'legal' => [
        'privacy' => 'https://www.swgafarmcredit.com/privacy-security/',
        'ccpa' => 'https://www.swgafarmcredit.com/california-consumer-privacy-act/',
        'disclosures' => 'https://www.swgafarmcredit.com/disclosures/'
      ],
      'article_download' => '/pdf/swg/SWGA-WYG-GetStartedDownload.pdf'
    ],
  ];
}
