import React from 'react';
import styled from 'styled-components';
import LoginInput from '../LoginInput';

function LoginInputStory() {
  return (
    <>
      <p> General </p>
      <StyledLogin
        version={2}
        countries={mock}
        width='400px'
        placeholder='Email/Phone'
        fnCountryChange={console.log}
        defaultIsdCode={91}
      />

      <p> Country flags </p>
      <LoginInput
        version={2}
        countries={mock}
        width='400px'
        placeholder='Email/Phone'
        fnCountryChange={console.log}
        defaultIsdCode={91}
        autoFocusInput
      />
    </>
  );
}

export { LoginInputStory };

const StyledLogin = styled(LoginInput)`
  background-color: #fbfbfb;
`;

const mock = [
  {
    countryId: 1,
    name: 'India',
    isdCode: '91',
    alpha2Code: 'IN',
    alpha3Code: 'IND',
    currencyCode: 'INR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp',
  },
  {
    countryId: 2,
    name: 'Afghanistan',
    isdCode: '93',
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    currencyCode: 'AFN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/af.png?output-format=webp',
  },
  {
    countryId: 3,
    name: 'Albania',
    isdCode: '355',
    alpha2Code: 'AL',
    alpha3Code: 'ALB',
    currencyCode: 'ALL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/al.png?output-format=webp',
  },
  {
    countryId: 4,
    name: 'Algeria',
    isdCode: '213',
    alpha2Code: 'DZ',
    alpha3Code: 'DZA',
    currencyCode: 'DZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/dz.png?output-format=webp',
  },
  {
    countryId: 5,
    name: 'American Samoa',
    isdCode: '1684',
    alpha2Code: 'AS',
    alpha3Code: 'ASM',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/as.png?output-format=webp',
  },
  {
    countryId: 6,
    name: 'Andorra',
    isdCode: '376',
    alpha2Code: 'AD',
    alpha3Code: 'AND',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ad.png?output-format=webp',
  },
  {
    countryId: 7,
    name: 'Angola',
    isdCode: '244',
    alpha2Code: 'AO',
    alpha3Code: 'AGO',
    currencyCode: 'AOA',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ao.png?output-format=webp',
  },
  {
    countryId: 8,
    name: 'Anguilla',
    isdCode: '1264',
    alpha2Code: 'AI',
    alpha3Code: 'AIA',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ai.png?output-format=webp',
  },
  {
    countryId: 9,
    name: 'Antarctica',
    isdCode: '672',
    alpha2Code: 'AQ',
    alpha3Code: 'ATA',
    currencyCode: '',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/aq.png?output-format=webp',
  },
  {
    countryId: 10,
    name: 'Antigua and Barbuda',
    isdCode: '1268',
    alpha2Code: 'AG',
    alpha3Code: 'ATG',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ag.png?output-format=webp',
  },
  {
    countryId: 11,
    name: 'Argentina',
    isdCode: '54',
    alpha2Code: 'AR',
    alpha3Code: 'ARG',
    currencyCode: 'ARS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ar.png?output-format=webp',
  },
  {
    countryId: 12,
    name: 'Armenia',
    isdCode: '374',
    alpha2Code: 'AM',
    alpha3Code: 'ARM',
    currencyCode: 'AMD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/am.png?output-format=webp',
  },
  {
    countryId: 13,
    name: 'Aruba',
    isdCode: '297',
    alpha2Code: 'AW',
    alpha3Code: 'ABW',
    currencyCode: 'AWG',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/aw.png?output-format=webp',
  },
  {
    countryId: 14,
    name: 'Australia',
    isdCode: '61',
    alpha2Code: 'AU',
    alpha3Code: 'AUS',
    currencyCode: 'AUD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/au.png?output-format=webp',
  },
  {
    countryId: 15,
    name: 'Austria',
    isdCode: '43',
    alpha2Code: 'AT',
    alpha3Code: 'AUT',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/at.png?output-format=webp',
  },
  {
    countryId: 16,
    name: 'Azerbaijan',
    isdCode: '994',
    alpha2Code: 'AZ',
    alpha3Code: 'AZE',
    currencyCode: 'AZN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/az.png?output-format=webp',
  },
  {
    countryId: 17,
    name: 'Bahamas',
    isdCode: '919',
    alpha2Code: 'BS',
    alpha3Code: 'BHS',
    currencyCode: 'BSD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bs.png?output-format=webp',
  },
  {
    countryId: 18,
    name: 'Bahrain',
    isdCode: '973',
    alpha2Code: 'BH',
    alpha3Code: 'BHR',
    currencyCode: 'BHD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bh.png?output-format=webp',
  },
  {
    countryId: 19,
    name: 'Bangladesh',
    isdCode: '880',
    alpha2Code: 'BD',
    alpha3Code: 'BGD',
    currencyCode: 'BDT',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bd.png?output-format=webp',
  },
  {
    countryId: 20,
    name: 'Barbados',
    isdCode: '1246',
    alpha2Code: 'BB',
    alpha3Code: 'BRB',
    currencyCode: 'BBD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bb.png?output-format=webp',
  },
  {
    countryId: 21,
    name: 'Belarus',
    isdCode: '375',
    alpha2Code: 'BY',
    alpha3Code: 'BLR',
    currencyCode: 'BYR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/by.png?output-format=webp',
  },
  {
    countryId: 22,
    name: 'Belgium',
    isdCode: '32',
    alpha2Code: 'BE',
    alpha3Code: 'BEL',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/be.png?output-format=webp',
  },
  {
    countryId: 23,
    name: 'Belize',
    isdCode: '501',
    alpha2Code: 'BZ',
    alpha3Code: 'BLZ',
    currencyCode: 'BZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bz.png?output-format=webp',
  },
  {
    countryId: 24,
    name: 'Benin',
    isdCode: '229',
    alpha2Code: 'BJ',
    alpha3Code: 'BEN',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bj.png?output-format=webp',
  },
  {
    countryId: 25,
    name: 'Bermuda',
    isdCode: '1441',
    alpha2Code: 'BM',
    alpha3Code: 'BMU',
    currencyCode: 'BMD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bm.png?output-format=webp',
  },
  {
    countryId: 26,
    name: 'Bhutan',
    isdCode: '975',
    alpha2Code: 'BT',
    alpha3Code: 'BTN',
    currencyCode: 'INR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bt.png?output-format=webp',
  },
  {
    countryId: 224,
    name: 'Virgin Islands, US',
    isdCode: '1340',
    alpha2Code: '',
    alpha3Code: 'VIR',
    currencyCode: '',
    flagImgUrl: 'https://b.zmtcdn.com/images/flags_z10/.png?output-format=webp',
  },
  {
    countryId: 28,
    name: 'Bosnia and Herzegovina',
    isdCode: '387',
    alpha2Code: 'BA',
    alpha3Code: 'BIH',
    currencyCode: 'BAM',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ba.png?output-format=webp',
  },
  {
    countryId: 29,
    name: 'Botswana',
    isdCode: '267',
    alpha2Code: 'BW',
    alpha3Code: 'BWA',
    currencyCode: 'BWP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bw.png?output-format=webp',
  },
  {
    countryId: 30,
    name: 'Brasil',
    isdCode: '55',
    alpha2Code: 'BR',
    alpha3Code: 'BRA',
    currencyCode: '',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/br.png?output-format=webp',
  },
  {
    countryId: 32,
    name: 'Bulgaria',
    isdCode: '359',
    alpha2Code: 'BG',
    alpha3Code: 'BGR',
    currencyCode: 'BGN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bg.png?output-format=webp',
  },
  {
    countryId: 33,
    name: 'Burkina Faso',
    isdCode: '226',
    alpha2Code: 'BF',
    alpha3Code: 'BFA',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bf.png?output-format=webp',
  },
  {
    countryId: 34,
    name: 'Burundi',
    isdCode: '257',
    alpha2Code: 'BI',
    alpha3Code: 'BDI',
    currencyCode: 'BIF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/bi.png?output-format=webp',
  },
  {
    countryId: 35,
    name: 'Cambodia',
    isdCode: '855',
    alpha2Code: 'KH',
    alpha3Code: 'KHM',
    currencyCode: 'KHR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/kh.png?output-format=webp',
  },
  {
    countryId: 36,
    name: 'Cameroon',
    isdCode: '237',
    alpha2Code: 'CM',
    alpha3Code: 'CMR',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cm.png?output-format=webp',
  },
  {
    countryId: 37,
    name: 'Canada',
    isdCode: '1',
    alpha2Code: 'CA',
    alpha3Code: 'CAN',
    currencyCode: 'CAD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ca.png?output-format=webp',
  },
  {
    countryId: 38,
    name: 'Cape Verde',
    isdCode: '238',
    alpha2Code: 'CV',
    alpha3Code: 'CPV',
    currencyCode: '',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cv.png?output-format=webp',
  },
  {
    countryId: 39,
    name: 'Cayman Islands',
    isdCode: '1345',
    alpha2Code: 'KY',
    alpha3Code: 'CYM',
    currencyCode: 'KYD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ky.png?output-format=webp',
  },
  {
    countryId: 40,
    name: 'Central African Republic',
    isdCode: '236',
    alpha2Code: 'CF',
    alpha3Code: 'CAF',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cf.png?output-format=webp',
  },
  {
    countryId: 41,
    name: 'Chad',
    isdCode: '235',
    alpha2Code: 'TD',
    alpha3Code: 'TCD',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/td.png?output-format=webp',
  },
  {
    countryId: 42,
    name: 'Chile',
    isdCode: '56',
    alpha2Code: 'CL',
    alpha3Code: 'CHL',
    currencyCode: 'CLP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cl.png?output-format=webp',
  },
  {
    countryId: 43,
    name: 'China',
    isdCode: '86',
    alpha2Code: 'CN',
    alpha3Code: 'CHN',
    currencyCode: 'CNY',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cn.png?output-format=webp',
  },
  {
    countryId: 44,
    name: 'Colombia',
    isdCode: '57',
    alpha2Code: 'CO',
    alpha3Code: 'COL',
    currencyCode: 'COU',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/co.png?output-format=webp',
  },
  {
    countryId: 45,
    name: 'Comoros',
    isdCode: '269',
    alpha2Code: 'KM',
    alpha3Code: 'COM',
    currencyCode: 'KMF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/km.png?output-format=webp',
  },
  {
    countryId: 46,
    name: 'Congo',
    isdCode: '242',
    alpha2Code: 'CG',
    alpha3Code: 'COG',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cg.png?output-format=webp',
  },
  {
    countryId: 48,
    name: 'Cook Islands',
    isdCode: '682',
    alpha2Code: 'CK',
    alpha3Code: 'COK',
    currencyCode: 'NZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ck.png?output-format=webp',
  },
  {
    countryId: 49,
    name: 'Costa Rica',
    isdCode: '506',
    alpha2Code: 'CR',
    alpha3Code: 'CRI',
    currencyCode: 'CRC',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cr.png?output-format=webp',
  },
  {
    countryId: 51,
    name: 'Croatia',
    isdCode: '385',
    alpha2Code: 'HR',
    alpha3Code: 'HRV',
    currencyCode: 'HRK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/hr.png?output-format=webp',
  },
  {
    countryId: 52,
    name: 'Cuba',
    isdCode: '53',
    alpha2Code: 'CU',
    alpha3Code: 'CUB',
    currencyCode: 'CUP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cu.png?output-format=webp',
  },
  {
    countryId: 53,
    name: 'Cyprus',
    isdCode: '357',
    alpha2Code: 'CY',
    alpha3Code: 'CYP',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cy.png?output-format=webp',
  },
  {
    countryId: 54,
    name: 'Czech Republic',
    isdCode: '420',
    alpha2Code: 'CZ',
    alpha3Code: 'CZE',
    currencyCode: 'CZK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/cz.png?output-format=webp',
  },
  {
    countryId: 55,
    name: 'Denmark',
    isdCode: '45',
    alpha2Code: 'DK',
    alpha3Code: 'DNK',
    currencyCode: 'DKK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/dk.png?output-format=webp',
  },
  {
    countryId: 56,
    name: 'Djibouti',
    isdCode: '253',
    alpha2Code: 'DJ',
    alpha3Code: 'DJI',
    currencyCode: 'DJF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/dj.png?output-format=webp',
  },
  {
    countryId: 57,
    name: 'Dominica',
    isdCode: '1767',
    alpha2Code: 'DM',
    alpha3Code: 'DMA',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/dm.png?output-format=webp',
  },
  {
    countryId: 58,
    name: 'Dominican Republic',
    isdCode: '18',
    alpha2Code: 'DO',
    alpha3Code: 'DOM',
    currencyCode: 'DOP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/do.png?output-format=webp',
  },
  {
    countryId: 59,
    name: 'Ecuador',
    isdCode: '593',
    alpha2Code: 'EC',
    alpha3Code: 'ECU',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ec.png?output-format=webp',
  },
  {
    countryId: 60,
    name: 'Egypt',
    isdCode: '20',
    alpha2Code: 'EG',
    alpha3Code: 'EGY',
    currencyCode: 'EGP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/eg.png?output-format=webp',
  },
  {
    countryId: 61,
    name: 'El Salvador',
    isdCode: '503',
    alpha2Code: 'SV',
    alpha3Code: 'SLV',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sv.png?output-format=webp',
  },
  {
    countryId: 62,
    name: 'Equatorial Guinea',
    isdCode: '240',
    alpha2Code: 'GQ',
    alpha3Code: 'GNQ',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gq.png?output-format=webp',
  },
  {
    countryId: 63,
    name: 'Eritrea',
    isdCode: '291',
    alpha2Code: 'ER',
    alpha3Code: 'ERI',
    currencyCode: 'ERN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/er.png?output-format=webp',
  },
  {
    countryId: 64,
    name: 'Estonia',
    isdCode: '372',
    alpha2Code: 'EE',
    alpha3Code: 'EST',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ee.png?output-format=webp',
  },
  {
    countryId: 65,
    name: 'Ethiopia',
    isdCode: '251',
    alpha2Code: 'ET',
    alpha3Code: 'ETH',
    currencyCode: 'ETB',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/et.png?output-format=webp',
  },
  {
    countryId: 66,
    name: 'Falkland Islands (Malvinas)',
    isdCode: '500',
    alpha2Code: 'FK',
    alpha3Code: 'FLK',
    currencyCode: 'FKP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/fk.png?output-format=webp',
  },
  {
    countryId: 67,
    name: 'Faroe Islands',
    isdCode: '298',
    alpha2Code: 'FO',
    alpha3Code: 'FRO',
    currencyCode: 'DKK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/fo.png?output-format=webp',
  },
  {
    countryId: 68,
    name: 'Fiji',
    isdCode: '679',
    alpha2Code: 'FJ',
    alpha3Code: 'FJI',
    currencyCode: 'FJD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/fj.png?output-format=webp',
  },
  {
    countryId: 69,
    name: 'Finland',
    isdCode: '358',
    alpha2Code: 'FI',
    alpha3Code: 'FIN',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/fi.png?output-format=webp',
  },
  {
    countryId: 70,
    name: 'France',
    isdCode: '33',
    alpha2Code: 'FR',
    alpha3Code: 'FRA',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/fr.png?output-format=webp',
  },
  {
    countryId: 71,
    name: 'French Guiana',
    isdCode: '594',
    alpha2Code: 'GF',
    alpha3Code: 'GUF',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gf.png?output-format=webp',
  },
  {
    countryId: 72,
    name: 'French Polynesia',
    isdCode: '689',
    alpha2Code: 'PF',
    alpha3Code: 'PYF',
    currencyCode: 'XPF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pf.png?output-format=webp',
  },
  {
    countryId: 73,
    name: 'Gabon',
    isdCode: '241',
    alpha2Code: 'GA',
    alpha3Code: 'GAB',
    currencyCode: 'XAF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ga.png?output-format=webp',
  },
  {
    countryId: 74,
    name: 'Gambia',
    isdCode: '220',
    alpha2Code: 'GM',
    alpha3Code: 'GMB',
    currencyCode: 'GMD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gm.png?output-format=webp',
  },
  {
    countryId: 75,
    name: 'Georgia',
    isdCode: '995',
    alpha2Code: 'GE',
    alpha3Code: 'GEO',
    currencyCode: 'GEL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ge.png?output-format=webp',
  },
  {
    countryId: 76,
    name: 'Germany',
    isdCode: '49',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/de.png?output-format=webp',
  },
  {
    countryId: 77,
    name: 'Ghana',
    isdCode: '233',
    alpha2Code: 'GH',
    alpha3Code: 'GHA',
    currencyCode: 'GHS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gh.png?output-format=webp',
  },
  {
    countryId: 78,
    name: 'Gibraltar',
    isdCode: '350',
    alpha2Code: 'GI',
    alpha3Code: 'GIB',
    currencyCode: 'GIP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gi.png?output-format=webp',
  },
  {
    countryId: 79,
    name: 'Greece',
    isdCode: '30',
    alpha2Code: 'GR',
    alpha3Code: 'GRC',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gr.png?output-format=webp',
  },
  {
    countryId: 80,
    name: 'Greenland',
    isdCode: '299',
    alpha2Code: 'GL',
    alpha3Code: 'GRL',
    currencyCode: 'DKK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gl.png?output-format=webp',
  },
  {
    countryId: 81,
    name: 'Grenada',
    isdCode: '1473',
    alpha2Code: 'GD',
    alpha3Code: 'GRD',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gd.png?output-format=webp',
  },
  {
    countryId: 82,
    name: 'Guadeloupe',
    isdCode: '590',
    alpha2Code: 'GP',
    alpha3Code: 'GLP',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gp.png?output-format=webp',
  },
  {
    countryId: 83,
    name: 'Guam',
    isdCode: '1671',
    alpha2Code: 'GU',
    alpha3Code: 'GUM',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gu.png?output-format=webp',
  },
  {
    countryId: 84,
    name: 'Guatemala',
    isdCode: '502',
    alpha2Code: 'GT',
    alpha3Code: 'GTM',
    currencyCode: 'GTQ',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gt.png?output-format=webp',
  },
  {
    countryId: 85,
    name: 'Guinea',
    isdCode: '224',
    alpha2Code: 'GN',
    alpha3Code: 'GIN',
    currencyCode: 'GNF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gn.png?output-format=webp',
  },
  {
    countryId: 86,
    name: 'Guinea-Bissau',
    isdCode: '245',
    alpha2Code: 'GW',
    alpha3Code: 'GNB',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gw.png?output-format=webp',
  },
  {
    countryId: 87,
    name: 'Guyana',
    isdCode: '592',
    alpha2Code: 'GY',
    alpha3Code: 'GUY',
    currencyCode: 'GYD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gy.png?output-format=webp',
  },
  {
    countryId: 88,
    name: 'Haiti',
    isdCode: '509',
    alpha2Code: 'HT',
    alpha3Code: 'HTI',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ht.png?output-format=webp',
  },
  {
    countryId: 89,
    name: 'Honduras',
    isdCode: '504',
    alpha2Code: 'HN',
    alpha3Code: 'HND',
    currencyCode: 'HNL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/hn.png?output-format=webp',
  },
  {
    countryId: 90,
    name: 'Hong Kong S.A.R., China',
    isdCode: '852',
    alpha2Code: 'HK',
    alpha3Code: 'HKG',
    currencyCode: '',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/hk.png?output-format=webp',
  },
  {
    countryId: 91,
    name: 'Hungary',
    isdCode: '36',
    alpha2Code: 'HU',
    alpha3Code: 'HUN',
    currencyCode: 'HUF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/hu.png?output-format=webp',
  },
  {
    countryId: 92,
    name: 'Iceland',
    isdCode: '354',
    alpha2Code: 'IS',
    alpha3Code: 'ISL',
    currencyCode: 'ISK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/is.png?output-format=webp',
  },
  {
    countryId: 94,
    name: 'Indonesia',
    isdCode: '62',
    alpha2Code: 'ID',
    alpha3Code: 'IDN',
    currencyCode: 'IDR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/id.png?output-format=webp',
  },
  {
    countryId: 96,
    name: 'Iraq',
    isdCode: '964',
    alpha2Code: 'IQ',
    alpha3Code: 'IRQ',
    currencyCode: 'IQD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/iq.png?output-format=webp',
  },
  {
    countryId: 97,
    name: 'Ireland',
    isdCode: '353',
    alpha2Code: 'IE',
    alpha3Code: 'IRL',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ie.png?output-format=webp',
  },
  {
    countryId: 98,
    name: 'Israel',
    isdCode: '972',
    alpha2Code: 'IL',
    alpha3Code: 'ISR',
    currencyCode: 'ILS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/il.png?output-format=webp',
  },
  {
    countryId: 99,
    name: 'Italy',
    isdCode: '39',
    alpha2Code: 'IT',
    alpha3Code: 'ITA',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/it.png?output-format=webp',
  },
  {
    countryId: 100,
    name: 'Jamaica',
    isdCode: '1876',
    alpha2Code: 'JM',
    alpha3Code: 'JAM',
    currencyCode: 'JMD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/jm.png?output-format=webp',
  },
  {
    countryId: 101,
    name: 'Japan',
    isdCode: '81',
    alpha2Code: 'JP',
    alpha3Code: 'JPN',
    currencyCode: 'JPY',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/jp.png?output-format=webp',
  },
  {
    countryId: 102,
    name: 'Jordan',
    isdCode: '962',
    alpha2Code: 'JO',
    alpha3Code: 'JOR',
    currencyCode: 'JOD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/jo.png?output-format=webp',
  },
  {
    countryId: 103,
    name: 'Kazakhstan',
    isdCode: '7',
    alpha2Code: 'KZ',
    alpha3Code: 'KAZ',
    currencyCode: 'KZT',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/kz.png?output-format=webp',
  },
  {
    countryId: 104,
    name: 'Kenya',
    isdCode: '254',
    alpha2Code: 'KE',
    alpha3Code: 'KEN',
    currencyCode: 'KES',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ke.png?output-format=webp',
  },
  {
    countryId: 105,
    name: 'Kiribati',
    isdCode: '686',
    alpha2Code: 'KI',
    alpha3Code: 'KIR',
    currencyCode: 'AUD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ki.png?output-format=webp',
  },
  {
    countryId: 108,
    name: 'Kuwait',
    isdCode: '965',
    alpha2Code: 'KW',
    alpha3Code: 'KWT',
    currencyCode: 'KWD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/kw.png?output-format=webp',
  },
  {
    countryId: 109,
    name: 'Kyrgyzstan',
    isdCode: '996',
    alpha2Code: 'KG',
    alpha3Code: 'KGZ',
    currencyCode: 'KGS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/kg.png?output-format=webp',
  },
  {
    countryId: 111,
    name: 'Latvia',
    isdCode: '371',
    alpha2Code: 'LV',
    alpha3Code: 'LVA',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lv.png?output-format=webp',
  },
  {
    countryId: 112,
    name: 'Lebanon',
    isdCode: '961',
    alpha2Code: 'LB',
    alpha3Code: 'LBN',
    currencyCode: 'LBP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lb.png?output-format=webp',
  },
  {
    countryId: 113,
    name: 'Lesotho',
    isdCode: '266',
    alpha2Code: 'LS',
    alpha3Code: 'LSO',
    currencyCode: 'ZAR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ls.png?output-format=webp',
  },
  {
    countryId: 114,
    name: 'Liberia',
    isdCode: '231',
    alpha2Code: 'LR',
    alpha3Code: 'LBR',
    currencyCode: 'LRD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lr.png?output-format=webp',
  },
  {
    countryId: 115,
    name: 'Libya',
    isdCode: '218',
    alpha2Code: 'LY',
    alpha3Code: 'LBY',
    currencyCode: 'LYD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ly.png?output-format=webp',
  },
  {
    countryId: 116,
    name: 'Liechtenstein',
    isdCode: '423',
    alpha2Code: 'LI',
    alpha3Code: 'LIE',
    currencyCode: 'CHF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/li.png?output-format=webp',
  },
  {
    countryId: 117,
    name: 'Lithuania',
    isdCode: '370',
    alpha2Code: 'LT',
    alpha3Code: 'LTU',
    currencyCode: 'LTL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lt.png?output-format=webp',
  },
  {
    countryId: 118,
    name: 'Luxembourg',
    isdCode: '352',
    alpha2Code: 'LU',
    alpha3Code: 'LUX',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lu.png?output-format=webp',
  },
  {
    countryId: 119,
    name: 'Macao',
    isdCode: '853',
    alpha2Code: 'MO',
    alpha3Code: 'MAC',
    currencyCode: 'MOP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mo.png?output-format=webp',
  },
  {
    countryId: 121,
    name: 'Madagascar',
    isdCode: '261',
    alpha2Code: 'MG',
    alpha3Code: 'MDG',
    currencyCode: 'MGA',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mg.png?output-format=webp',
  },
  {
    countryId: 122,
    name: 'Malawi',
    isdCode: '265',
    alpha2Code: 'MW',
    alpha3Code: 'MWI',
    currencyCode: 'MWK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mw.png?output-format=webp',
  },
  {
    countryId: 123,
    name: 'Malaysia',
    isdCode: '60',
    alpha2Code: 'MY',
    alpha3Code: 'MYS',
    currencyCode: 'MYR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/my.png?output-format=webp',
  },
  {
    countryId: 124,
    name: 'Maldives',
    isdCode: '960',
    alpha2Code: 'MV',
    alpha3Code: 'MDV',
    currencyCode: 'MVR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mv.png?output-format=webp',
  },
  {
    countryId: 125,
    name: 'Mali',
    isdCode: '223',
    alpha2Code: 'ML',
    alpha3Code: 'MLI',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ml.png?output-format=webp',
  },
  {
    countryId: 126,
    name: 'Malta',
    isdCode: '356',
    alpha2Code: 'MT',
    alpha3Code: 'MLT',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mt.png?output-format=webp',
  },
  {
    countryId: 127,
    name: 'Marshall Islands',
    isdCode: '692',
    alpha2Code: 'MH',
    alpha3Code: 'MHL',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mh.png?output-format=webp',
  },
  {
    countryId: 128,
    name: 'Martinique',
    isdCode: '596',
    alpha2Code: 'MQ',
    alpha3Code: 'MTQ',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mq.png?output-format=webp',
  },
  {
    countryId: 129,
    name: 'Mauritania',
    isdCode: '222',
    alpha2Code: 'MR',
    alpha3Code: 'MRT',
    currencyCode: 'MRO',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mr.png?output-format=webp',
  },
  {
    countryId: 130,
    name: 'Mauritius',
    isdCode: '230',
    alpha2Code: 'MU',
    alpha3Code: 'MUS',
    currencyCode: 'MUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mu.png?output-format=webp',
  },
  {
    countryId: 131,
    name: 'Mayotte',
    isdCode: '269',
    alpha2Code: 'YT',
    alpha3Code: 'MYT',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/yt.png?output-format=webp',
  },
  {
    countryId: 132,
    name: 'Mexico',
    isdCode: '52',
    alpha2Code: 'MX',
    alpha3Code: 'MEX',
    currencyCode: 'MXV',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mx.png?output-format=webp',
  },
  {
    countryId: 135,
    name: 'Monaco',
    isdCode: '377',
    alpha2Code: 'MC',
    alpha3Code: 'MCO',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mc.png?output-format=webp',
  },
  {
    countryId: 136,
    name: 'Mongolia',
    isdCode: '976',
    alpha2Code: 'MN',
    alpha3Code: 'MNG',
    currencyCode: 'MNT',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mn.png?output-format=webp',
  },
  {
    countryId: 137,
    name: 'Montenegro',
    isdCode: '382',
    alpha2Code: 'ME',
    alpha3Code: 'MNE',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/me.png?output-format=webp',
  },
  {
    countryId: 138,
    name: 'Montserrat',
    isdCode: '1664',
    alpha2Code: 'MS',
    alpha3Code: 'MSR',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ms.png?output-format=webp',
  },
  {
    countryId: 139,
    name: 'Morocco',
    isdCode: '212',
    alpha2Code: 'MA',
    alpha3Code: 'MAR',
    currencyCode: 'MAD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ma.png?output-format=webp',
  },
  {
    countryId: 140,
    name: 'Mozambique',
    isdCode: '258',
    alpha2Code: 'MZ',
    alpha3Code: 'MOZ',
    currencyCode: 'MZN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mz.png?output-format=webp',
  },
  {
    countryId: 141,
    name: 'Myanmar',
    isdCode: '95',
    alpha2Code: 'MM',
    alpha3Code: 'MMR',
    currencyCode: 'MMK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mm.png?output-format=webp',
  },
  {
    countryId: 142,
    name: 'Namibia',
    isdCode: '264',
    alpha2Code: 'NA',
    alpha3Code: 'NAM',
    currencyCode: 'ZAR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/na.png?output-format=webp',
  },
  {
    countryId: 143,
    name: 'Nauru',
    isdCode: '674',
    alpha2Code: 'NR',
    alpha3Code: 'NRU',
    currencyCode: 'AUD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/nr.png?output-format=webp',
  },
  {
    countryId: 144,
    name: 'Nepal',
    isdCode: '977',
    alpha2Code: 'NP',
    alpha3Code: 'NPL',
    currencyCode: 'NPR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/np.png?output-format=webp',
  },
  {
    countryId: 145,
    name: 'Netherlands',
    isdCode: '31',
    alpha2Code: 'NL',
    alpha3Code: 'NLD',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/nl.png?output-format=webp',
  },
  {
    countryId: 147,
    name: 'New Caledonia',
    isdCode: '687',
    alpha2Code: 'NC',
    alpha3Code: 'NCL',
    currencyCode: 'XPF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/nc.png?output-format=webp',
  },
  {
    countryId: 148,
    name: 'New Zealand',
    isdCode: '64',
    alpha2Code: 'NZ',
    alpha3Code: 'NZL',
    currencyCode: 'NZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/nz.png?output-format=webp',
  },
  {
    countryId: 149,
    name: 'Nicaragua',
    isdCode: '505',
    alpha2Code: 'NI',
    alpha3Code: 'NIC',
    currencyCode: 'NIO',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ni.png?output-format=webp',
  },
  {
    countryId: 150,
    name: 'Niger',
    isdCode: '227',
    alpha2Code: 'NE',
    alpha3Code: 'NER',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ne.png?output-format=webp',
  },
  {
    countryId: 151,
    name: 'Nigeria',
    isdCode: '234',
    alpha2Code: 'NG',
    alpha3Code: 'NGA',
    currencyCode: 'NGN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ng.png?output-format=webp',
  },
  {
    countryId: 152,
    name: 'Niue',
    isdCode: '683',
    alpha2Code: 'NU',
    alpha3Code: 'NIU',
    currencyCode: 'NZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/nu.png?output-format=webp',
  },
  {
    countryId: 153,
    name: 'Northern Mariana Islands',
    isdCode: '1670',
    alpha2Code: 'MP',
    alpha3Code: 'MNP',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/mp.png?output-format=webp',
  },
  {
    countryId: 154,
    name: 'Norway',
    isdCode: '47',
    alpha2Code: 'NO',
    alpha3Code: 'NOR',
    currencyCode: 'NOK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/no.png?output-format=webp',
  },
  {
    countryId: 155,
    name: 'Oman',
    isdCode: '968',
    alpha2Code: 'OM',
    alpha3Code: 'OMN',
    currencyCode: 'OMR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/om.png?output-format=webp',
  },
  {
    countryId: 156,
    name: 'Pakistan',
    isdCode: '92',
    alpha2Code: 'PK',
    alpha3Code: 'PAK',
    currencyCode: 'PKR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pk.png?output-format=webp',
  },
  {
    countryId: 157,
    name: 'Palau',
    isdCode: '680',
    alpha2Code: 'PW',
    alpha3Code: 'PLW',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pw.png?output-format=webp',
  },
  {
    countryId: 158,
    name: 'Panama',
    isdCode: '507',
    alpha2Code: 'PA',
    alpha3Code: 'PAN',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pa.png?output-format=webp',
  },
  {
    countryId: 159,
    name: 'Papua New Guinea',
    isdCode: '675',
    alpha2Code: 'PG',
    alpha3Code: 'PNG',
    currencyCode: 'PGK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pg.png?output-format=webp',
  },
  {
    countryId: 160,
    name: 'Paraguay',
    isdCode: '595',
    alpha2Code: 'PY',
    alpha3Code: 'PRY',
    currencyCode: 'PYG',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/py.png?output-format=webp',
  },
  {
    countryId: 161,
    name: 'Peru',
    isdCode: '51',
    alpha2Code: 'PE',
    alpha3Code: 'PER',
    currencyCode: 'PEN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pe.png?output-format=webp',
  },
  {
    countryId: 162,
    name: 'Philippines',
    isdCode: '63',
    alpha2Code: 'PH',
    alpha3Code: 'PHL',
    currencyCode: 'PHP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ph.png?output-format=webp',
  },
  {
    countryId: 163,
    name: 'Poland',
    isdCode: '48',
    alpha2Code: 'PL',
    alpha3Code: 'POL',
    currencyCode: 'PLN',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pl.png?output-format=webp',
  },
  {
    countryId: 164,
    name: 'Portugal',
    isdCode: '351',
    alpha2Code: 'PT',
    alpha3Code: 'PRT',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pt.png?output-format=webp',
  },
  {
    countryId: 165,
    name: 'Puerto Rico',
    isdCode: '1787',
    alpha2Code: 'PR',
    alpha3Code: 'PRI',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pr.png?output-format=webp',
  },
  {
    countryId: 166,
    name: 'Qatar',
    isdCode: '974',
    alpha2Code: 'QA',
    alpha3Code: 'QAT',
    currencyCode: 'QAR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/qa.png?output-format=webp',
  },
  {
    countryId: 167,
    name: 'Reunion',
    isdCode: '262',
    alpha2Code: 'RE',
    alpha3Code: 'REU',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/re.png?output-format=webp',
  },
  {
    countryId: 168,
    name: 'Romania',
    isdCode: '40',
    alpha2Code: 'RO',
    alpha3Code: 'ROU',
    currencyCode: 'RON',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ro.png?output-format=webp',
  },
  {
    countryId: 169,
    name: 'Russia',
    isdCode: '7',
    alpha2Code: 'rs',
    alpha3Code: 'RUS',
    currencyCode: '',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/rs.png?output-format=webp',
  },
  {
    countryId: 170,
    name: 'Rwanda',
    isdCode: '250',
    alpha2Code: 'RW',
    alpha3Code: 'RWA',
    currencyCode: 'RWF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/rw.png?output-format=webp',
  },
  {
    countryId: 172,
    name: 'Saint Kitts and Nevis',
    isdCode: '1869',
    alpha2Code: 'KN',
    alpha3Code: 'KNA',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/kn.png?output-format=webp',
  },
  {
    countryId: 173,
    name: 'Saint Lucia',
    isdCode: '1758',
    alpha2Code: 'LC',
    alpha3Code: 'LCA',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lc.png?output-format=webp',
  },
  {
    countryId: 174,
    name: 'Saint Pierre and Miquelon',
    isdCode: '508',
    alpha2Code: 'PM',
    alpha3Code: 'SPM',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/pm.png?output-format=webp',
  },
  {
    countryId: 175,
    name: 'Saint Vincent and the Grenadines',
    isdCode: '1784',
    alpha2Code: 'VC',
    alpha3Code: 'VCT',
    currencyCode: 'XCD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/vc.png?output-format=webp',
  },
  {
    countryId: 176,
    name: 'Samoa',
    isdCode: '685',
    alpha2Code: 'WS',
    alpha3Code: 'WSM',
    currencyCode: 'WST',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ws.png?output-format=webp',
  },
  {
    countryId: 177,
    name: 'San Marino',
    isdCode: '378',
    alpha2Code: 'SM',
    alpha3Code: 'SMR',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sm.png?output-format=webp',
  },
  {
    countryId: 178,
    name: 'Sao Tome and Principe',
    isdCode: '239',
    alpha2Code: 'ST',
    alpha3Code: 'STP',
    currencyCode: 'STD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/st.png?output-format=webp',
  },
  {
    countryId: 179,
    name: 'Saudi Arabia',
    isdCode: '966',
    alpha2Code: 'SA',
    alpha3Code: 'SAU',
    currencyCode: 'SAR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sa.png?output-format=webp',
  },
  {
    countryId: 180,
    name: 'Senegal',
    isdCode: '221',
    alpha2Code: 'SN',
    alpha3Code: 'SEN',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sn.png?output-format=webp',
  },
  {
    countryId: 181,
    name: 'Serbia',
    isdCode: '381',
    alpha2Code: 'RS',
    alpha3Code: 'SRB',
    currencyCode: 'RSD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/rs.png?output-format=webp',
  },
  {
    countryId: 182,
    name: 'Seychelles',
    isdCode: '248',
    alpha2Code: 'SC',
    alpha3Code: 'SYC',
    currencyCode: 'SCR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sc.png?output-format=webp',
  },
  {
    countryId: 183,
    name: 'Sierra Leone',
    isdCode: '232',
    alpha2Code: 'SL',
    alpha3Code: 'SLE',
    currencyCode: 'SLL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sl.png?output-format=webp',
  },
  {
    countryId: 184,
    name: 'Singapore',
    isdCode: '65',
    alpha2Code: 'SG',
    alpha3Code: 'SGP',
    currencyCode: 'SGD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sg.png?output-format=webp',
  },
  {
    countryId: 185,
    name: 'Slovakia',
    isdCode: '421',
    alpha2Code: 'SK',
    alpha3Code: 'SVK',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sk.png?output-format=webp',
  },
  {
    countryId: 186,
    name: 'Slovenia',
    isdCode: '386',
    alpha2Code: 'SI',
    alpha3Code: 'SVN',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/si.png?output-format=webp',
  },
  {
    countryId: 187,
    name: 'Solomon Islands',
    isdCode: '677',
    alpha2Code: 'SB',
    alpha3Code: 'SLB',
    currencyCode: 'SBD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sb.png?output-format=webp',
  },
  {
    countryId: 188,
    name: 'Somalia',
    isdCode: '252',
    alpha2Code: 'SO',
    alpha3Code: 'SOM',
    currencyCode: 'SOS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/so.png?output-format=webp',
  },
  {
    countryId: 189,
    name: 'South Africa',
    isdCode: '27',
    alpha2Code: 'ZA',
    alpha3Code: 'ZAF',
    currencyCode: 'ZAR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/za.png?output-format=webp',
  },
  {
    countryId: 190,
    name: 'Spain',
    isdCode: '34',
    alpha2Code: 'ES',
    alpha3Code: 'ESP',
    currencyCode: 'EUR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/es.png?output-format=webp',
  },
  {
    countryId: 191,
    name: 'Sri Lanka',
    isdCode: '94',
    alpha2Code: 'LK',
    alpha3Code: 'LKA',
    currencyCode: 'LKR',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/lk.png?output-format=webp',
  },
  {
    countryId: 192,
    name: 'Sudan',
    isdCode: '249',
    alpha2Code: 'SD',
    alpha3Code: 'SDN',
    currencyCode: 'SDG',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sd.png?output-format=webp',
  },
  {
    countryId: 193,
    name: 'Suriname',
    isdCode: '597',
    alpha2Code: 'SR',
    alpha3Code: 'SUR',
    currencyCode: 'SRD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sr.png?output-format=webp',
  },
  {
    countryId: 194,
    name: 'Swaziland',
    isdCode: '268',
    alpha2Code: 'SZ',
    alpha3Code: 'SWZ',
    currencyCode: 'SZL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/sz.png?output-format=webp',
  },
  {
    countryId: 195,
    name: 'Sweden',
    isdCode: '46',
    alpha2Code: 'SE',
    alpha3Code: 'SWE',
    currencyCode: 'SEK',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/se.png?output-format=webp',
  },
  {
    countryId: 196,
    name: 'Switzerland',
    isdCode: '41',
    alpha2Code: 'CH',
    alpha3Code: 'CHE',
    currencyCode: 'CHW',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ch.png?output-format=webp',
  },
  {
    countryId: 199,
    name: 'Tajikistan',
    isdCode: '992',
    alpha2Code: 'TJ',
    alpha3Code: 'TJK',
    currencyCode: 'TJS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tj.png?output-format=webp',
  },
  {
    countryId: 201,
    name: 'Thailand',
    isdCode: '66',
    alpha2Code: 'TH',
    alpha3Code: 'THA',
    currencyCode: 'THB',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/th.png?output-format=webp',
  },
  {
    countryId: 202,
    name: 'Timor-Leste',
    isdCode: '670',
    alpha2Code: 'TL',
    alpha3Code: 'TLS',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tl.png?output-format=webp',
  },
  {
    countryId: 203,
    name: 'Togo',
    isdCode: '228',
    alpha2Code: 'TG',
    alpha3Code: 'TGO',
    currencyCode: 'XOF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tg.png?output-format=webp',
  },
  {
    countryId: 204,
    name: 'Tokelau',
    isdCode: '690',
    alpha2Code: 'TK',
    alpha3Code: 'TKL',
    currencyCode: 'NZD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tk.png?output-format=webp',
  },
  {
    countryId: 205,
    name: 'Tonga',
    isdCode: '676',
    alpha2Code: 'TO',
    alpha3Code: 'TON',
    currencyCode: 'TOP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/to.png?output-format=webp',
  },
  {
    countryId: 206,
    name: 'Trinidad and Tobago',
    isdCode: '1868',
    alpha2Code: 'TT',
    alpha3Code: 'TTO',
    currencyCode: 'TTD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tt.png?output-format=webp',
  },
  {
    countryId: 207,
    name: 'Tunisia',
    isdCode: '216',
    alpha2Code: 'TN',
    alpha3Code: 'TUN',
    currencyCode: 'TND',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tn.png?output-format=webp',
  },
  {
    countryId: 208,
    name: 'Turkey',
    isdCode: '90',
    alpha2Code: 'TR',
    alpha3Code: 'TUR',
    currencyCode: 'TRY',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tr.png?output-format=webp',
  },
  {
    countryId: 209,
    name: 'Turkmenistan',
    isdCode: '993',
    alpha2Code: 'TM',
    alpha3Code: 'TKM',
    currencyCode: 'TMT',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tm.png?output-format=webp',
  },
  {
    countryId: 210,
    name: 'Turks and Caicos Islands',
    isdCode: '1649',
    alpha2Code: 'TC',
    alpha3Code: 'TCA',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tc.png?output-format=webp',
  },
  {
    countryId: 211,
    name: 'Tuvalu',
    isdCode: '688',
    alpha2Code: 'TV',
    alpha3Code: 'TUV',
    currencyCode: 'AUD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/tv.png?output-format=webp',
  },
  {
    countryId: 212,
    name: 'Uganda',
    isdCode: '256',
    alpha2Code: 'UG',
    alpha3Code: 'UGA',
    currencyCode: 'UGX',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ug.png?output-format=webp',
  },
  {
    countryId: 213,
    name: 'Ukraine',
    isdCode: '380',
    alpha2Code: 'UA',
    alpha3Code: 'UKR',
    currencyCode: 'UAH',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ua.png?output-format=webp',
  },
  {
    countryId: 214,
    name: 'UAE',
    isdCode: '971',
    alpha2Code: 'AE',
    alpha3Code: 'ARE',
    currencyCode: 'AED',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ae.png?output-format=webp',
  },
  {
    countryId: 215,
    name: 'United Kingdom',
    isdCode: '44',
    alpha2Code: 'GB',
    alpha3Code: 'GBR',
    currencyCode: 'GBP',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/gb.png?output-format=webp',
  },
  {
    countryId: 216,
    name: 'United States',
    isdCode: '1',
    alpha2Code: 'US',
    alpha3Code: 'USA',
    currencyCode: 'USD',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/us.png?output-format=webp',
  },
  {
    countryId: 217,
    name: 'Uruguay',
    isdCode: '598',
    alpha2Code: 'UY',
    alpha3Code: 'URY',
    currencyCode: 'UYU',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/uy.png?output-format=webp',
  },
  {
    countryId: 218,
    name: 'Uzbekistan',
    isdCode: '998',
    alpha2Code: 'UZ',
    alpha3Code: 'UZB',
    currencyCode: 'UZS',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/uz.png?output-format=webp',
  },
  {
    countryId: 219,
    name: 'Vanuatu',
    isdCode: '678',
    alpha2Code: 'VU',
    alpha3Code: 'VUT',
    currencyCode: 'VUV',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/vu.png?output-format=webp',
  },
  {
    countryId: 222,
    name: 'Vietnam',
    isdCode: '84',
    alpha2Code: 'VN',
    alpha3Code: 'VND',
    currencyCode: 'VND',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/vn.png?output-format=webp',
  },
  {
    countryId: 225,
    name: 'Wallis and Futuna',
    isdCode: '681',
    alpha2Code: 'WF',
    alpha3Code: 'WLF',
    currencyCode: 'XPF',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/wf.png?output-format=webp',
  },
  {
    countryId: 226,
    name: 'Yemen',
    isdCode: '967',
    alpha2Code: 'YE',
    alpha3Code: 'YEM',
    currencyCode: 'YER',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/ye.png?output-format=webp',
  },
  {
    countryId: 227,
    name: 'Zambia',
    isdCode: '260',
    alpha2Code: 'ZM',
    alpha3Code: 'ZMB',
    currencyCode: 'ZMW',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/zm.png?output-format=webp',
  },
  {
    countryId: 228,
    name: 'Zimbabwe',
    isdCode: '263',
    alpha2Code: 'ZW',
    alpha3Code: 'ZWE',
    currencyCode: 'ZWL',
    flagImgUrl:
      'https://b.zmtcdn.com/images/flags_z10/zw.png?output-format=webp',
  },
];
