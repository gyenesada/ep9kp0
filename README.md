 # 1. Beadandó
 
 Feladat vállalása: 
  Könyvek és idézetek nyílvántartása webes felületen (Mini-moly.hu)
  
  <b>Funkcionális követelmények:</b>
 <p><i>Vendégként:</i>
  <ul>
  <li> szeretnék szabadon könyvekre keresni </li>
  <li> szeretnék regisztrálni, illetve belépni ha ezt megtettem </li> 
  <li> szeretnék olvasni könyvek általános információiról </li>
  </ul></p>
          
 <p><i>Felhasználóként:</i>
  <ul>
  <li> szeretnék belépni az oldalra </li> 
  <li> szeretném az olvasott könyveket bejelölni </li> 
 <li> szeretnék új könyvet/idézetet hozzáadni </li> 
 <li> szeretném a kiválasztott könyvet magánkönyvtáramhoz adni </li> 
 <li> szeretném a kiválasztott könyvet kedvencnek jelölni </li>
 <li> szeretném profiladataimat szerkeszteni </li>
 <li> szeretnék kijelentkezni </li>
 </ul></p>
 
 <b>Nem funkcionális követelmények: </b>
 <ul>
 <li> Felhasználóbarát </li>
 <li> Biztonságos </li>
 <li> Gyors hozzáférés </li> 
 </ul>
 
 <p><b>Use-case diagram</b></p>
 ![Use-case diagram](imgs/usecase.png)
         
 <p><b>Adatmodellek</b></p>        
 ![Adatmodellek](imgs/adatmod.png)
 <p><b>Szakterületi fogalomjegyzék</b> </p>
 <ul> 
 <li><b>Könyv:</b> Bármilyen nyelven íródott szöveget és/vagy képeket tartalmazó
 fizikális vagy digitális gyűjtemény, melyet a szerző és/vagy célközönség
 könyvnek minősített.</li> 
 <li><b>Idézet:</b> Könyvből kiragadott, pár mondatot tartalmazó szöveg.</li> 
 </ul>
 
 <p><b>Szerepkörök</b></p>
 <ul>
 <li><b>vendég: </b>könyvek keresését, böngészését és megtekintését végezheti, illetve regisztrálhat.</li>
 <li><b>felhasználó: </b>a vendég szerepkörén túl saját olvasásait kezelheti, új könyveket illetve idézeteket vihet fel, profiladatait módosíthatja, könyveket jelölhet magánkönyvtárba, illetve kedvencnek. </li>
 </ul>
 
 <p><b>Oldaltérkép</b></p>
 <b>publikus: </b>
 <ul>
 <li> Főoldal</li>
 <li> Könyvek találati listája</li>
 <ul> <li>  Könyv adatainak megtekintése, a hozzátartozó idézetekkel együtt. </li></ul>
 <li> Belépés</li>
 <li> Regisztráció </li>
 </ul> 
 <b>felhasználó: </b>
 <ul>
 <li> Kilépés </li>
 <li> Profiladatok </li>
 <ul><li> Profil szerkesztése</li></ul>
 <li> Új könyv felvitele </li>
 <li> Új idézet felvitele </li>
 <li> Kedvenc könyvek kezelése </li>
 <ul><li>  Hozzáadás a listához</li> <li>  Törlés a listáról </li> </ul> 
 <li> Magánkönyvtár kezelése </li>
 <ul><li>  Hozzáadás a listához</li> <li>  Törlés a listáról </li> </ul> 
 <li> Olvasott könyvek kezelése </li> 
 <ul><li>  Hozzáadás a listához</li> <li>  Törlés a listáról </li> </ul> 
 </ul>
 
 <p><b>Folyamatok meghatározása</b></p>
 <p>Új könyv, illetve idézet felvitele felhasználók számára</p>
 ![Új könyv foly.](imgs/first.png)
 <p>Könyvvel való viszony szerkesztése felhasználók számára</p>
 ![fav/own/read](imgs/second.png)
 <p>Felhasználó számára elérhető lehetőségek</p> 
 ![Lehetőségek](imgs/third.png)
 <p><i>Lehetőségekbe beletartozik: Új könyv felvitele, Új idézet felvitele, profiladatok szerkesztése, kedvenc könyvek megtekintése, magánkönyvtár megtekintése, olvasott könyvek megtekintése</i></p>
 
 <p><b>Végpontok</b><p>
 <ul>
 <li> <b> GET/:</b> főoldal</li> 
 <li> <b> GET/login:</b> bejelentkező oldal</li> 
 <li> <b> POST/login:</b> bejelentkezési adatok feltöltése</li> 
 <li> <b> GET/profile:</b> profiladatok lekérése</li> 
 <li> <b> GET/books:</b> könyvlista</li> 
 <li> <b> GET/books/:id :</b> könyv megtekintése</li> 
 <li> <b> GET/books/:quotes:</b> könyv idézeteinek megtekintése</li> 
 <li> <b> GET/books/:create:</b> új könyv felvitele, és űrlap megtekintése</li> 
 <li> <b> POST/books/:create:</b> új könyv felvitele, adatok küldése</li> 
 <li> <b> GET/books/:quotes/:create:</b> új idézet felvitele, és űrlap megtekintése</li>
 <li> <b> POST/books/:quotes/:create:</b> új idézet adatainak beküldése</li> 
 <li> <b> GET/profile/:favorites:</b> kedvenc könyvek megtekintése</li> 
 <li> <b> GET/profile/:own: </b> saját könyvek megtekintése</li> 
 <li> <b> GET/profile/:read:</b> olvasott könyvek megtekintése</li> 
 </ul>
 
 <p><b>Oldalvázlat</b></p>
 <p>Főoldal</p>
 ![Főoldal](imgs/main.png)
 <p>Profil</p>
 ![Profiladatok](imgs/profile.png)3
 <p>Könyv adatok</p>
 ![Könyv információk](imgs/book infos.png)
 <p>Keresési találatok / kedvenc könyvek..stb (Könyvek listája)</p>
 ![Könyvek listázása](imgs/book-list.png)
 <p>Új könyv/idézet hozzáadása</p>
 ![Új hozzáadás](imgs/add-new-book.png)
