import React from 'react';
import '../css/MenuSection.css';

import Gallery from 'react-photo-gallery';

function MenuSection() {
  const photos = [
    {
      src:
        'https://downloader.disk.yandex.ru/preview/d1b8f9c54d26f458b36bd5704a546cd37ea3fea08d9092078300bb861b79c2dc/5feb6311/VmEj1s8WU7Rz4PCUfS5uayThvPG--WMQHoAxz4wxAe0bkSlbJ1dZw2RuUnwO7Z-SWaxMRqbDS3fGR8USYmbOvw%3D%3D?uid=0&filename=IMG_8309.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963  ',
      width: 4,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/84da83388972305304b1bd175b5a9c0904967d1e7c9f7ba965919117337fd31f/5feb6311/NFIktzv2oj8fvY3G34CLpKquJCTGjtiF4KKjek8xGJ0sPRa8Gt9wJ7CkqI_5QJEk-hve_sjxah51pzzoGN0mtw%3D%3D?uid=0&filename=IMG_8337.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 1,
      height: 1,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/d9ff8f2ca557041a724e2a40e052fc899fd6afc44a007bab4b66b898c98975f8/5feb6312/cVilt5MrWrMtXsdDOvg2O6YnJiN7nKiaqAQqtpGywmKuWVQ8iFHVa8k6qQDsVOPC6nf68uzmsY4dXJQSjriyeQ%3D%3D?uid=0&filename=IMG_8413-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 5,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/55eba55045e25af6818303dd4220afba92d0707f732e89947d6f66ee1962a0d5/5feb6312/BQIHHSItEyaA8y7aVhayw_dpO6r71uYo4WDLG3shFT74Fs7lhubeY8LbE4eh_XJvdj3i5ES-H1mx7UC6Lx1LYQ%3D%3D?uid=0&filename=IMG_8438-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 3,
      height: 4,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/5b776b7fa4064115067f21630501b2de2ee5f85a40000749231087290d8fa1df/5feb6312/QPbpX-96Hc6rEHfbvv2F_dP04zNC1fKbw4KI7af5w7unDp7vO35So5kHyPAhME8NLqs3hJ7KKPX5OoISyq-dWg%3D%3D?uid=0&filename=IMG_8542-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 5,
      height: 4,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/5806a0907d8ac94c15b47e3f6866708df34b6425b72855ae9423eb193010445b/5feb630e/r_0HMYJzVj5gp1GOtuiI4s-yO0NKC-X5VqX_QSvo9ip77uktp_G1WN9_g6Z_2ga6_yK7M_SfUTgSpY2AiQfvGw%3D%3D?uid=0&filename=IMG_8571.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 3,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/2d42a2077a34767bb5b3bf95de2fc2fc0395f5b0d6bc0e2ca0eed811b0726e30/5feb638b/r_0HMYJzVj5gp1GOtuiI4h6dUoMIuWMvvfXswuGlEk8E47x41zGZSIe_LoKJh9h6Fkn5EDzNfW2H7dwmsi4kjw%3D%3D?uid=0&filename=IMG_8724.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 4,
      height: 2,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/f43ff49bcf69c5943677968165f1da739a0ba61377dcabbb6fe27fa3d9bf0bae/5feb6457/aMrELMjU88LCdgZD6nYZ8GuFXVMlevHGM1YUkFDajrC6eFYw313QhS_yfw4iiA1bBTS4yWi7U91YWTgubt_GSA%3D%3D?uid=0&filename=IMG_9049.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 4,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/e88f4a6d45d009dc81d78a343458b84d7f66f69b4738ad0b5f755f58a2840bb3/5feb6442/F-z7SiqJwKzj-AVsZo94GMuNioDXcbeXhcr9fJf2cYbBeoJukycqprG3xmC4bGo9Z8qSwCJ3fAFBcndTR_bEFA%3D%3D?uid=0&filename=IMG_9021.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 4,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/ca213a92e5195026c0e93dcc42546ae45bd5f78fc4e441dd6e648c726b9a70cd/5feb6442/ye9WkMlngVYfxvc42nPngMVMvU23Oof0eTWyWaBf1GH_Pz_BLcrpiFGE8dbZ2cqxU8b94Y4M6N9bW_-yadBLbQ%3D%3D?uid=0&filename=IMG_8956.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 5,
      height: 4,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/1dd050c1a7f924ca5519274929b2f1b30414bd895bdccd9364c6a9f8bb05fc70/5feb6415/u3bKPY7G9-99CxfLciW5gLxhDYVrGz-l83gTS8l0mM2cm3sIXTEUdPduMqPWDpaooYWWN26M1JNB3hn23QkuQg%3D%3D?uid=0&filename=IMG_8883.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 4,
      height: 3,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/eb11e1da6199b5371013c0bb060587c43aa8fb3cfebe7872495cc163da616385/5feb6415/rQuvh6imp2QcC2SlbUfuxga4AUEcKlMLQX29XyADis2KeX1elfMeSRo3-GFlucL4YMyKX_swe8ZyRCYHYWVZ_w%3D%3D?uid=0&filename=IMG_8847.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 2927,
      height: 1000,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/74ffa2982289e61721b744830a0407fa4a7487224ac2c2c905cb4de59ccae7e7/5feb6442/UyMcJHbjzil1WOTb9qUYvqDtE7nCG1CosY3EUVSlqvCXThtKfIxarZOjk3tLFWa74XT2lCrkIipgJXnN6Omq3g%3D%3D?uid=0&filename=IMG_9030.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 6,
      height: 4,
    },
    {
      src:
        'https://downloader.disk.yandex.ru/preview/1c7250b4dceff6d9eac9f77d3d1d12312495d03dba3a10a9d570dadb5857f25d/5feb6442/4LOCJYE_yw_8NcV1IsuO8D2XOJ2o0pxOINinveRN3RqhWLbb4lMKKidPjclEXhlYcRPj6anBnAvLCCoTwodDcw%3D%3D?uid=0&filename=IMG_9017.cr2&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x963',
      width: 4,
      height: 3,
    },
  ];
  return (
    <div className="wrapperMenuSection">
      <div className="hrContentGalery">
        Галерея
        <hr className="short" />
      </div>
      {/* <div className="wrapperAboutMenu">
        <div className="grid-item-aMenu">
          Меню
          <hr className="short" />
        </div>

        <div className="grid-item-bMenu">
          <img src={pngMenu1} alt="" />
        </div>
        <div className="grid-item-bMenu">
          <img src={pngMenu1} alt="" />
        </div>

        <div className="grid-item-cMenu">
          <div className="textAboutMenu">
            <img src={pngMenu1} alt="" />
          </div>
        </div>
        <div className="grid-item-cMenu">
          <div className="textAboutMenu">
            <img src={pngMenu1} alt="" />
          </div>
        </div>
      </div> */}
      <Gallery photos={photos} />
    </div>
  );
}

export default MenuSection;
