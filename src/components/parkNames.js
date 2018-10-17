const parks = [
  { name: "Abraham Lincoln Birthplace NHS" },
  { name: "Acadia National Park" },
  { name: "Adams NHP" },
  { name: "Agate Fossil Beds NM" },
  { name: "Alagnak Wild River" },
  { name: "Alaska National Parks" },
  { name: "Alibates Flint Quarries NM" },
  { name: "Allegheny Portage Railroad NHS" },
  { name: "American Memorial Park " },
  { name: "Amistad National Rec Area" },
  { name: "Andersonville NHS" },
  { name: "Andrew Johnson NHS" },
  { name: "Aniakchak NM and Preserve" },
  { name: "Antietam National Battlefield" },
  { name: "Apostle Islands National Lakeshore" },
  { name: "Appalachian National Scenic Trail" },
  { name: "Appomattox Court House NHP" },
  { name: "Arches National Park" },
  { name: "Arkansas Post National Memorial" },
  { name: "Arlington House, The Robert E Lee Memorial" },
  { name: "Assateague Island National Seashore" },
  { name: "Aztec Ruins NM" },
  { name: "Badlands National Park" },
  { name: "Baltimore-Washington Parkway " },
  { name: "Bandelier NM" },
  { name: "Benjamin Franklin National Memorial" },
  { name: "Bent's Old Fort NHS" },
  { name: "Bering Land Bridge National Preserve" },
  { name: "Big Bend National Park" },
  { name: "Big Cypress National Preserve" },
  { name: "Big Hole National Battlefield" },
  { name: "Big South Fork National River and Rec Area" },
  { name: "Big Thicket National Preserve" },
  { name: "Bighorn Canyon National Rec Area" },
  { name: "Biscayne National Park" },
  { name: "Black Canyon of the Gunnison National Park" },
  { name: "Blackstone River Valley Natl Heritage Corridor" },
  { name: "Blue Ridge Parkway" },
  { name: "Bluestone National Scenic River" },
  { name: "Booker T Washington NM" },
  { name: "Boston African American NHS" },
  { name: "Boston Harbor Islands National Rec Area" },
  { name: "Boston NHP" },
  { name: "Brices Cross Roads National Battlefield Site" },
  { name: "Brown v Board of Education NHS" },
  { name: "Bryce Canyon National Park" },
  { name: "Buck Island Reef NM" },
  { name: "Buffalo National River" },
  { name: "Cabrillo NM" },
  { name: "California National Historic Trail" },
  { name: "Canaveral National Seashore" },
  { name: "Cane River Creole NHP " },
  { name: "Canyon de Chelly NM" },
  { name: "Canyonlands National Park" },
  { name: "Cape Cod National Seashore" },
  { name: "Cape Hatteras National Seashore" },
  { name: "Cape Krusenstern NM" },
  { name: "Cape Lookout National Seashore" },
  { name: "Capitol Reef National Park" },
  { name: "Capulin Volcano NM" },
  { name: "Carl Sandburg Home NHS" },
  { name: "Carlsbad Caverns National Park" },
  { name: "Casa Grande Ruins NM " },
  { name: "Castillo de San Marcos NM" },
  { name: "Castle Clinton NM " },
  { name: "Catoctin Mountain Park" },
  { name: "Cedar Breaks NM" },
  { name: "Cedar Creek and Belle Grove NHP" },
  { name: "César E. Chávez National Monument" },
  { name: "Chaco Culture NHP" },
  { name: "Chamizal National Memorial" },
  { name: "Channel Islands National Park" },
  { name: "Charles Pinckney NHS" },
  { name: "Chattahoochee River National Rec Area" },
  { name: "Chesapeake and Ohio Canal NHP" },
  { name: "Chicago Portage NHS " },
  { name: "Chickamauga and Chattanooga Natl Military Park" },
  { name: "Chickasaw National Rec Area" },
  { name: "Chimney Rock NHS" },
  { name: "Chiricahua NM" },
  { name: "Christiansted NHS" },
  { name: "City of Rocks National Reserve" },
  { name: "Clara Barton NHS" },
  { name: "Claude Moore Colonial Farm " },
  { name: "Colonial NHP" },
  { name: "Colorado NM" },
  { name: "Congaree National Park" },
  { name: "Constitution Gardens" },
  { name: "Coronado National Memorial" },
  { name: "Cowpens National Battlefield" },
  { name: "Crater Lake National Park" },
  { name: "Craters of the Moon NM and Preserve" },
  { name: "Cumberland Gap NHP" },
  { name: "Cumberland Island National Seashore" },
  { name: "Curecanti National Rec Area" },
  { name: "Cuyahoga Valley National Park" },
  { name: "Little Rock Central High School" },
  { name: "David Berger National Memorial " },
  { name: "Dayton Aviation Heritage NHP" },
  { name: "De Soto National Memorial" },
  { name: "Death Valley National Park" },
  { name: "Delaware and Lehigh National Heritage Corridor " },
  { name: "Delaware Water Gap National Rec Area" },
  { name: "Denali National Park and Preserve" },
  { name: "Devils Postpile NM" },
  { name: "Devils Tower NM" },
  { name: "Dinosaur NM" },
  { name: "Dry Tortugas National Park" },
  { name: "Ebey’s Landing National Historical Reserve" },
  { name: "Edgar Allan Poe NHS " },
  { name: "Edison NHS " },
  { name: "Effigy Mounds NM" },
  { name: "Eisenhower NHS" },
  { name: "El Camino Real de los Tejas" },
  { name: "El Malpais NM" },
  { name: "El Morro NM" },
  { name: "Eleanor Roosevelt NHS " },
  { name: "Ellis Island" },
  { name: "Erie Canal" },
  { name: "Eugene O'Neill NHS " },
  { name: "Everglades National Park" },
  { name: "Farmington Wild and Scenic River " },
  { name: "Father Marquette National Memorial " },
  { name: "Federal Hall National Memorial " },
  { name: "Fire Island National Seashore" },
  { name: "First Ladies NHS" },
  { name: "Flight 93 National Memorial" },
  { name: "Florissant Fossil Beds NM" },
  { name: "Ford's Theatre NHS" },
  { name: "Fort Bowie NHS" },
  { name: "Fort Caroline National Memorial" },
  { name: "Fort Davis NHS" },
  { name: "Fort Donelson National Battlefield" },
  { name: "Fort Frederica NM" },
  { name: "Fort Laramie NHS " },
  { name: "Fort Larned NHS" },
  { name: "Fort Matanzas NM" },
  { name: "Fort McHenry NM and Historic Shrine" },
  { name: "Fort Monroe" },
  { name: "Fort Moultrie" },
  { name: "Fort Necessity National Battlefield" },
  { name: "Fort Point NHS" },
  { name: "Fort Pulaski NM" },
  { name: "Fort Raleigh NHS" },
  { name: "Fort Scott NHS " },
  { name: "Fort Smith NHS" },
  { name: "Fort Stanwix NM" },
  { name: "Fort Sumter NM" },
  { name: "Fort Union NM" },
  { name: "Fort Union Trading Post NHS" },
  { name: "Fort Vancouver NHS" },
  { name: "Fort Washington Park" },
  { name: "Fossil Butte NM" },
  { name: "Franklin Delano Roosevelt Memorial" },
  { name: "Frederick Douglass NHS " },
  { name: "Frederick Law Olmsted NHS " },
  { name: "Fredericksburg and Spotsylvania Natl Military Park" },
  { name: "Friendship Hill NHS" },
  { name: "Gates of the Arctic National Park and Preserve" },
  { name: "Gateway National Rec Area" },
  { name: "Gauley River National Rec Area" },
  { name: "General Grant National Memorial" },
  { name: "George Rogers Clark NHP" },
  { name: "George Washington Birthplace NM " },
  { name: "George Washington Carver NM" },
  { name: "George Washington Memorial Parkway" },
  { name: "Gettysburg National Military Park" },
  { name: "Gila Cliff Dwellings NM" },
  { name: "Glacier Bay National Park and Preserve" },
  { name: "Glacier National Park" },
  { name: "Glen Canyon National Rec Area" },
  { name: "Glen Echo Park" },
  { name: "Gloria Dei (Old Swedes) Church NHS " },
  { name: "Glorieta Battlefield " },
  { name: "Golden Gate National Rec Area" },
  { name: "Golden Spike NHS" },
  { name: "Governors Island NM" },
  { name: "Grand Canyon National Park" },
  { name: "Grand Canyon-Parashant National Monument" }
];
// Grand Portage NM
// Grand Teton National Park
// Grant-Kohrs Ranch NHS
// Great Basin National Park
// Great Egg Harbor Scenic and Rec River
// Great Falls Park
// Great Sand Dunes National Park and Preserve
// Great Smoky Mountains National Park
// Green Springs Historic District
// Greenbelt Park
// Guadalupe Mountains National Park
// Guilford Courthouse National Military Park
// Gulf Islands National Seashore
// Hagerman Fossil Beds NM
// Haleakala National Park
// Hamilton Grange National Memorial
// Hampton NHS
// Harpers Ferry NHP
// Harriet Tubman Underground Railroad
// Harry S Truman NHS
// Hawai'i Volcanoes National Park
// Herbert Hoover NHS
// Hohokam Pima NM
// Home of Franklin D Roosevelt NHS
// Homestead NM of America
// Hopewell Culture NHP
// Hopewell Furnace NHS
// Horace M Albright Training Center
// Horseshoe Bend National Military Park
// Hot Springs National Park
// Hovenweep NM
// Hubbell Trading Post NHS
// Ice Age National Scenic Trail
// Illinois and Michigan Canal Natl Heritage Corridor
// Independence NHP
// Indiana Dunes National Lakeshore
// Isle Royale National Park
// James A Garfield NHS
// Jamestown NHS
// Jean Lafitte NHP and Preserve
// Jefferson National Expansion Memorial
// Jewel Cave NM
// Jimmy Carter NHS
// John D Rockefeller Jr Memorial Parkway
// John Day Fossil Beds NM
// John Fitzgerald Kennedy NHS
// John Muir NHS
// Johnstown Flood National Memorial
// Joshua Tree National Park
// New Orleans Jazz NHP
// Kalaupapa NHP
// Kaloko-Honokohau NHP
// Katmai National Park and Preserve
// Kenai Fjords National Park
// Kennesaw Mountain National Battlefield Park
// Keweenaw NHP
// Kings Mountain National Military Park
// Klondike Gold Rush NHP
// Klondike Gold Rush NHP-Seattle Unit
// Knife River Indian Villages NHS
// Kobuk Valley National Park
// Korean War Veterans Memorial
// Lake Chelan National Rec Area
// Lake Clark National Park and Preserve
// Lake Mead National Rec Area
// Lake Meredith National Rec Area
// Lake Roosevelt National Rec Area
// Lassen Volcanic National Park
// Lava Beds NM
// LBJ Memorial Grove on the Potomac
// Lewis and Clark National Historic Trail
// Lewis and Clark NHP
// Lincoln Boyhood National Memorial
// Lincoln Home NHS
// Lincoln Memorial
// Little Bighorn Battlefield NM
// Little River Canyon National Preserve
// Little Rock Central High School NHS
// Longfellow NHS
// Lowell NHP
// Lyndon B Johnson NHP
// Maggie L Walker NHS
// Mammoth Cave National Park
// Manassas National Battlefield Park
// Manhattan Sites
// Manzanar NHS
// Marsh-Billings-Rockefeller NHP
// Martin Luther King Jr NHS
// Martin Van Buren NHS
// Mary McLeod Bethune Council House NHS
// McLoughlin House NHS
// Mesa Verde National Park
// Middle Delaware National Scenic River
// Minidoka NHS
// Minute Man NHP
// Minuteman Missle NHS
// Mississippi National River and Rec Area
// Missouri National Rec River
// Mojave National Preserve
// Monocacy National Battlefield
// Montezuma Castle NM
// Moores Creek National Battlefield
// Mormon Pioneer National Historic Trail
// Morristown NHP
// Mount Rainier National Park
// Mount Rushmore National Memorial
// Muir Woods NM
// Natchez NHP
// Natchez Trace National Scenic Trail
// Natchez Trace Parkway
// National Capital Parks-Central
// National Capital Parks-East
// National Mall
// National Park of American Samoa
// National Park Service
// National World War II Memorial
// Natural Bridges NM
// Navajo NM
// New Bedford Whaling NHP
// New Jersey Coastal Heritage Trail Route
// New River Gorge National River
// Nez Perce NHP
// Nicodemus NHS
// Ninety Six NHS
// Niobrara National Scenic River
// Noatak National Preserve
// North Cascades National Park
// North Country National Scenic Trail
// Northwest Alaska Areas
// Obed Wild and Scenic River
// Ocmulgee NM
// Oklahoma City National Memorial
// Old Post Office Tower
// Olympic National Park
// Oregon Caves NM
// Oregon National Historic Trail
// Organ Pipe Cactus NM
// Overmountain Victory National Historic Trail
// Ozark National Scenic Riverways
// New Jersey Pinelands
// Padre Island National Seashore
// Palo Alto Battlefield NHS
// Paterson-Great Falls
// Pea Ridge National Military Park
// Pecos NHP
// Pennsylvania Avenue NHS
// Perry's Victory and International Peace Memorial
// Petersburg National Battlefield
// Petrified Forest National Park
// Petroglyph NM
// Pictured Rocks National Lakeshore
// Pinnacles NP
// Pipe Spring NM
// Pipestone NM
// Piscataway Park
// Point Reyes National Seashore
// Pony Express National Historic Trail
// Port Chicago
// Potomac Heritage National Scenic Trail
// Poverty Point NM
// Presidio of San Francisco
// Prince William Forest Park
// Pu'uhonua o Honaunau NHP
// Pu'ukohola Heiau NHS
// Rainbow Bridge NM
// Redwood National and State Parks
// Richmond National Battlefield Park
// Rio Grande Wild and Scenic River
// River Raisin
// Rock Creek Park
// Rocky Mountain National Park
// Roger Williams National Memorial
// Roosevelt Campobello International Park
// Rosie the Riveter/World War II Home Front NHP
// Ross Lake National Rec Area
// Russell Cave NM
// Sagamore Hill NHS
// Saguaro National Park
// Saint Croix Island International Historic Site
// Saint Croix National Scenic Riverway
// Saint Paul's Church NHS
// Saint-Gaudens NHS
// Salem Maritime NHS
// Salinas Pueblo Missions NM
// Salt River Bay NHP and Ecological Preserve
// San Antonio Missions NHP
// San Francisco Maritime NHP
// San Juan Island NHP
// San Juan NHS
// Sand Creek Massacre
// Santa Fe National Historic Trail
// Santa Monica Mountains National Rec Area
// Saratoga NHP
// Saugus Iron Works NHS
// Scotts Bluff NM
// Selma to Montgomery NHT
// Sequoia and Kings Canyon National Parks
// Sewall-Belmont House NHS
// Shenandoah National Park
// Shiloh National Military Park
// Sitka NHP
// Sleeping Bear Dunes National Lakeshore
// Springfield Armory NHS
// Statue of Liberty NM
// Steamtown NHS
// Stephen T Mather Training Center
// Stones River National Battlefield
// Sunset Crater Volcano NM
// Tallgrass Prairie National Preserve
// Thaddeus Kosciuszko National Memorial
// Theodore Roosevelt Birthplace NHS
// Theodore Roosevelt Inaugural NHS
// Theodore Roosevelt Island
// Theodore Roosevelt National Park
// Thomas Jefferson Memorial
// Thomas Stone NHS
// Timpanogos Cave NM
// Timucuan Ecological and Historic Preserve
// Tonto NM
// Touro Synagogue NHS
// Trail of Tears National Historic Trail
// Tumacacori NHP
// Tupelo National Battlefield
// Tuskegee Airmen NHS
// Tuskegee Institute NHS
// Tuzigoot NM
// Ulysses S Grant NHS
// Underground Railroad
// Upper Delaware Scenic and Rec River
// USS Arizona Memorial
// Valley Forge NHP
// Vanderbilt Mansion NHS
// Vicksburg National Military Park
// Vietnam Veterans Memorial
// Virgin Islands Coral Reef NM
// Virgin Islands National Park
// Voyageurs National Park
// World War II Valor in the Pacific
// Walnut Canyon NM
// War in the Pacific NHP
// Washington Monument
// Washita Battlefield NHS
// Weir Farm NHS
// Whiskeytown-Shasta-Trinity National Rec Area
// White House
// White Sands NM
// Whitman Mission NHS
// William Howard Taft NHS
// Wilson's Creek National Battlefield
// Wind Cave National Park
// Wolf Trap National Park for the Performing Arts
// Women's Rights NHP
// Wrangell-St Elias National Park and Preserve
// Wright Brothers National Memorial
// Wupatki NM
// Yellowstone National Park
// Yorktown Battlefield
// Yosemite National Park
// Yucca House NM
// Yukon-Charley Rivers National Preserve
// Zion National Park

export default parks;
