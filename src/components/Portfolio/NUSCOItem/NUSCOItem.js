// NUSCOItem.js
import React, { useState, useEffect, useRef } from 'react';
import './NUSCOItem.scss'; // Import SCSS file for styling

import NUSCOTrainOfTimeHomeboundImg from '../../../assets/images/portfolio/NUSCO/NUSCO-Train-Of-Time-Homebound.jpg'
import NUSSOFantasticInstrumentImg from '../../../assets/images/portfolio/NUSCO/NUSSO-Fantastic-Instruments.jpg'
import NUSCOSymphonicFiestaImg from '../../../assets/images/portfolio/NUSCO/NUSCO-Symphonic-Fiesta-2024.jpg'
import YALCImg from '../../../assets/images/portfolio/NUSCO/YALC-WBAS-Leadership-Talk.jpg'
import EssentiallyMacbeth2024Img from '../../../assets/images/portfolio/NUSCO/Essentially-Macbeth-2024.jpg'
import EssentiallyMacbethProgrammeBooklet from '../../../assets/documents/Essentially_Macbeth_Programme_Booklet_SCCC_2024.pdf'
import MOJOTheRisingSunProgrammeBooklet from '../../../assets/documents/MOJO-The-Rising-Sun-Programme-Booklet.pdf'
import MOJOTheRisingSunImg from '../../../assets/images/portfolio/NUSCO/MOJO-The-Rising-Sun.png'
import NUSCOInBloomImg from '../../../assets/images/portfolio/NUSCO/NUSCO-In-Bloom.jpg'
import JourneyToTheEastImg from '../../../assets/images/portfolio/NUSCO/Journey-To-The-East.png'
import NUSCO50Img from '../../../assets/images/portfolio/NUSCO/NUSCO50.png'

export const NUSCOItems = [
  {
    title: 'Train of Time: Homebound',
    affiliation: "NUS Chinese Orchestra (NUSCO)",
    eventType: 'Outreach Programme',
    period: 'November 2024, Academic Year 24/25 Semester 1',
    location: 'Yong Siew Toh (YST) Concert Hall, NUS',
    descriptions: [
      "Handled initial ideation and procurement of MRT Audio Files, as well as logistics planning especially Percussion section.",
      "Performed 3 songs depicting different eras of Singapore, highlighting Singapore's growth from a fishing village to a modern urbanized city.",
      "With a twist of time-travelling fantasy, this short yet impactful 30-minute concert occurs back-to-back with NUS Symphony Orchestra and NUS Winds Symphony, which have their respective concert programmes.",
    ],
    imageUrl: NUSCOTrainOfTimeHomeboundImg,
    largerImageUrl: 'https://www.facebook.com/NUSChineseOrchestra/posts/attention-please-the-train-approaching-yst-concert-hall-will-begin-its-service-o/1056816076444845/',
    songs: [
      { label: 'Song 1: Song of the Sister\'s Island《姐妹岛诵》 by Wang Chenwei 王晨威', url: '' },
      { label: 'Song 2: Kreta Ayer《饮水思源：牛车水》 by Liong Kit Yeng 梁洁莹', url: '' },
      { label: 'Song 3: Aspirations 《展望》by Wang Chenwei 王辰威', url: ''}
    ],
  },
  {
    title: 'NUSSO - Fantastic Instruments & Where to Hear Them',
    affiliation: "NUS Symphony Orchestra (NUSSO)",
    eventType: 'Outreach Programme',
    period: 'November 2024, Academic Year 24/25 Semester 1',
    location: 'Yong Siew Toh (YST) Concert Hall, NUS',
    descriptions: [
      "Guest played for NUS Symphony Orchestra (NUSSO) Percussion section in their concert with Greenwood Primary School.",
      "This concert occurs back-to-back with NUS Chinese Orchestra and NUS Winds Symphony, which have their respective concert programmes.",
      "Songs Played: 'Morning Mood' and 'In the Hall of the Mountain King' from Peer Gynt Suite No.1 Op.46 by Edward Grieg, The Lord of the Rings - The Fellowship of the Ring, Harry's Wondrous World.",
    ],
    imageUrl: NUSSOFantasticInstrumentImg,
    largerImageUrl: 'https://www.facebook.com/story.php?story_fbid=564704535920795&id=100071437594604',
    songs: [
      { label: 'Song 1: Morning Mood from Peer Gynt Suite No.1 Op.46', url: '' },
      { label: 'Song 2: In the Hall of the Mountain King from Peer Gynt Suite No.1 Op.46', url: '' },
      { label: 'Song 3: The Lord of the Rings - The Fellowship of the Ring', url: ''},
      { label: 'Song 4: Harry\'s Wondrous World', url: ''},
    ],
  },
  {
    title: 'Youth Arts Leaders Conference (YALC) 2024',
    affiliation: "NUS Chinese Orchestra (NUSCO), NUS Wind Symphony (NUSWS)",
    eventType: 'Leadership Conference',
    period: 'August 2024, Academic Year 24/25 Semester 1',
    location: 'University Town, NUS',
    descriptions: [
      "Jointly organized with Wind Bands Association of Singapore (WBAS), YALC 2024 serves to nurture music leaders from Secondary School and pre-university institutions through a 2-day workshop conference.",
      "Crafted and Conducted 90-minute leadership talk about Section Leader and Executive Committee in an Orchestral Setting to percussionists from participating schools.",
      "Guest Played The Avengers alongside NUSWS and various secondary school students. ",
    ],
    imageUrl: YALCImg,
    largerImageUrl: '',
    songs: [
      { label: 'NUSCO Song: 《七彩之和》青·月亮歌' },
      { label: 'NUSWS Song: The Avengers arranged by Robert Longfield' }
    ],
  },
  {
    title: 'Symphonic Fiesta 2024',
    affiliation: "NUS Chinese Orchestra (NUSCO), NUS Wind Symphony (NUSWS)",
    eventType: 'Freshman Orientation Programme',
    period: 'July 2024, Academic Year 24/25 Semester 1',
    location: 'University Town, NUS',
    descriptions: [
      "Freshman Orientation Programme for interested students, jointly organized by NUSCO, NUSSO, NUSWS, and NUS Chinese Dance.",
      "Assisted in the preparation of Programme Slides and coordinating event flow.",
      "Performed alongside freshmen in NUSCO and guest played in NUSWS.",
      "Performed drumset in a short showcase in collaboration with NUSSO and NUSWS musicians."
    ],
    imageUrl: NUSCOSymphonicFiestaImg,
    largerImageUrl: '',
    songs: [
      { label: 'NUSCO Song: 《七彩之和》青·月亮歌' },
      { label: 'NUSWS Song 1: Planets - Mars, The Bringer of War' },
      { label: 'NUSWS Song 2: Planets - Jupiter, The Bringer of Jollity' },
      { label: 'Showcase Song 1: Viva La Vida' },
      { label: 'Showcase Song 2: Original Medley Arrangement of 一笑江湖- 科目三 Kemusan and "Driftweil City" from Pokemon Black & White' }
    ],
  },
  {
    title: 'Essentially Macbeth 必要麦克白 (Cultural Extravaganza 2024)',
    affiliation: "NUS Chinese Orchestra (NUSCO), NUS Chinese Drama",
    eventType: 'Artistic Showcase',
    period: 'June 2024, Academic Year 23/24 Semester 2 - Summer Vacation',
    location: 'Singapore Chinese Cultural Centre (SCCC)',
    descriptions: [
      "Performed in SCCC Cultural Extravaganza 2024, following the award-winning success in Essentially Macbeth performance 2023 in NUS.",
      "The production brought together a diverse team, including professional and original cast members, musicians, and crew, with key contributors such as original Conductor Mr Moses Gay, Artistic Director Ms Judy Ngo, and Production Stage Manager Mr Kenneth Soon Wei Xuan.",
      "The performance explored new artistic dimensions by integrating a Chinese Orchestra into a live theatre setting to produce background music (BGM) and sound effects (SFX).",
    ],
    imageUrl: EssentiallyMacbeth2024Img,
    largerImageUrl: '',
    urls: [
      { label: 'SCCC Essentially Macbeth 2024 Event Details', url: 'https://singaporeccc.org.sg/events/essentially-macbeth-cultural-extravaganza-2024/' },
      { label: '联合早报 Essentially Macbeth 2024 News', url: 'https://www.zaobao.com.sg/lifestyle/culture/story20240704-3947731' },
      { label: 'Essentially Macbeth 2024 Programme Booklet', url: EssentiallyMacbethProgrammeBooklet },
    ],
  },
  {
    title: 'MOJO - The Rising Sun',
    affiliation: "MOJO, Yong Siew Toh (YST) Conservatory of Music",
    eventType: 'Artistic Showcase',
    period: 'April 2024, Academic Year 23/24 Semester 2',
    location: 'Yong Siew Toh (YST) Concert Hall, NUS',
    descriptions: [
      "MOJO is a volunteer-based community Chinese orchestra in Singapore, promoting Chinese music in Singapore and cultivating a community of adept musicians and music enthusiasts.", 
      "This debut performance, The Rising Sun, is filled with challenging yet engaging songs that test musicians' limits, with a very short 4-day rehearsal programme.",
      "Performed alongside many well-known Singapore Chinese Orchestra (SCO) musicians and YST music students under esteemed conductor Mr Moses Gay and producer Mr Jonathan Ngeow."
    ],
    imageUrl: MOJOTheRisingSunImg,
    largerImageUrl: '',
    songs: [
      { label: 'Song 1: Surging forward《奔腾》by Xie Peng 谢鹏' },
      { label: 'Song 2: Aspirations《展望》by Wang Chenwei 王⾠威' },
      { label: 'Song 3: Ode to Sun 《太阳颂》all movements by Wang Danhong 王丹红' },
    ],
    urls: [
      { label: 'MOJO The Rising Sun Programme Booklet', url: MOJOTheRisingSunProgrammeBooklet },
    ]
  },
  {
    title: 'In Bloom 。盛季 🌷',
    affiliation: "NUS Chinese Orchestra (NUSCO)",
    eventType: 'Artistic Showcase',
    period: 'March 2024, Academic Year 23/24 Semester 2',
    location: 'University Cultural Centre Ho Bee Auditorium, NUS',
    descriptions: [
      "A performance with contemporary pieces with interesting storyline of the life journey of a flower.",
      "Song theme revolves around nature, aspirations and landscape explorations."
    ],
    imageUrl: NUSCOInBloomImg,
    largerImageUrl: '',
    songs: [
      { label: 'Song 1: Spring Flowers and Autumn Fruits 《春华秋实》💐 by Wang Yunfei 王云飞' },
      { label: 'Song 2: Beautiful Horqin Grasslands 《美丽的科尔沁草原》🐎 by Zhang Hanshu 张翰书' },
      { label: 'Song 3: For Our Dreams 《逐梦》💛 by Wang Chenwei 王⾠威' },
      { label: 'Song 4: Macau Capriccio 《澳门随想曲》🎆 by Wang Danhong 王丹红' },
    ],
  },
  {
    title: 'Journey to the East 东游记',
    affiliation: "NUS Chinese Orchestra (NUSCO), NUS Chinese Dance",
    eventType: 'Outreach Programme',
    period: 'Nov 2023, Academic Year 23/24 Semester 1',
    location: 'University Cultural Centre Theatre, NUS',
    descriptions: [
      "A fresh collaboration between NUSCO and NUS Chinese Dance to produce a concert and instrument touch tour for Primary 6 students to appreciate the two performing arts together.",
      "For Orchestra pieces, the selected songs display majestic and joyful vibes of the Chinese music."
    ],
    imageUrl: JourneyToTheEastImg,
    largerImageUrl: '',
    songs: [
      { label: 'Song 1: Impressions of Chinese Music《印象国乐》by Jiang Ying 姜莹 (Music + Dance)' },
      { label: 'Song 2: Dagger Society Suite Overture 《小刀会序曲》by Shang Yi 商易 (Music)' },
      { label: 'Song 3: Dunhuang Dance《敦煌舞》(Dance)' },
      { label: 'Song 4: Uygur Folk Dance《维吾尔族舞》(Dance)' },
      { label: 'Song 5: Rendezvous in the Forest《林中夜会》by Guan Shengyou 关圣佑 (Music)' },
      { label: 'Song 6: Galloping Steeds《骏马奔驰》by Gu Guan Ren 顾冠仁 (Music)' }, 
      { label: 'Song 7: Beautiful Horqin Grasslands 《美丽的科尔沁草原》Movement 1 by Zhang Hanshu 张翰书 (Music + Dance)' },
    ],
  },
  {
    title: 'NUSCO50 (NUSCO 50th Anniversary)',
    affiliation: "NUS Chinese Orchestra (NUSCO), NUS Alumni Chinese Orchestra (NUSACO)",
    eventType: 'Artistic Showcase',
    period: 'June 2023, Academic Year 22/23 Semester 2 - Summer Vacation',
    location: 'University Cultural Centre, NUS',
    descriptions: [
      "NUSCO50 marks the 50th Anniversary of NUSCO, a joint performance with the newly formed NUSACO under the music direction of conductor Moses Gay, bringing a mix of contemporary and traditional pieces.",
      "The concert features Yangqin soloist and alumni Ong Wei Da in the piece 'The Phoenix Nods' 《凤点头》",
      "The concert had an encore piece following great response and enthusiasm from audience for more Chinese Orchestra music.",
    ],
    imageUrl: NUSCO50Img,
    largerImageUrl: '',
    songs: [
      { label: 'Song 1: Youth Overture《青年序曲》by Luo Wei Lun 罗伟伦' },
      { label: 'Song 2: Confluence《融》by Wang Chenwei 王晨威' },
      { label: 'Song 3: The Phoenix Nods《凤点头》by Xu Changjun 徐昌俊' },
      { label: 'Song 4: Admiral of the Seven Seas - The Voyage《海上第一人- 郑和，海路》by Luo Wei Lun 罗伟伦' },
      { label: 'Song 5: Fisherman\'s Song of the Eastern Sea《东海渔歌》by Gu Guan Ren 顾冠仁 and Ma Sheng Long 马圣龙' },
      { label: 'Encore: Axi Tribe Dance《阿细跳跃》by Peng Xiu Wen 彭修文' }, 
    ],
  },
  // Add more portfolio items as needed
];

const NUSCOItem = ({ title, affiliation, eventType, period, location, descriptions, imageUrl, largerImageUrl , songs, urls }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleImageClick = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the document
    toggleOverlay();
  };

  return (
    <div className="nusco-item">
      <div className="description">
        <h2>{title}</h2>
        <h3>Affiliated with: {affiliation}</h3>
        <h3>Event Type: {eventType}</h3>
        <h3>Period: {period}</h3>
        <h3>Location: {location}</h3>
        <div className="descriptions">
            {descriptions.map((sentence, index) => (
                <p key={index}>{sentence}</p>
            ))}
        </div>
        {songs &&
          <div className="songs">
            {songs.map((song, index) => (
              <span key={index}>{song.label}</span>
            ))}
          </div>
        }
        {urls && 
            <div className="urls">
            {urls.map((url, index) => (
              <a key={index} href={url.url} target="_blank" rel="noopener noreferrer">{url.label}</a>
            ))}
          </div>
        }
      </div>
      
      <div className="image">
        <img
          src={imageUrl}
          alt={title}
          onClick={handleImageClick}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default NUSCOItem;