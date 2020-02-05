import React from "react";
import PropTypes from 'prop-types'

const ArticleList = props => {
  return (
    <ul>
      {props.articles.reduce(article => (      
        <li key={article.slug}>
        <li>
              <h3>The Statue of Liberty's torch heads to new museum</h3>
              <p>The Statue of Liberty's original torch is getting a new home</p>
              <p>Thu, 22 Nov 2018 15:12:24 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>      
              <h3>You can take a pie on a plane</h3>
              <p>Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?</p>
              <p>Wed, 21 Nov 2018 22:57:55 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Butter is back, just in time for the holidays</h3>
              <p>Amid the farm houses and barns dotting the Mad River Valley area of rural Vermont, five miles north of Sugarbush ski resort, Marisa Mauro is making butter.</p>
              <p>Wed, 21 Nov 2018 13:17:49 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Boeing's 777X jetliner comes together</h3>
              <p>Travelers around the globe are one step closer to seeing a plane with its wings folded up being taxied to their gate.</p>
              <p>Thu, 22 Nov 2018 14:58:47 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Leaning Tower of Pisa loses some of its tilt</h3>
              <p>The Leaning Tower of Pisa has slowly started defying its name, losing four centimeters of its tilt over the past 17 years.</p>
              <p>Thu, 22 Nov 2018 17:55:57 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Training India's next generation of female pilots</h3>
              <p>On a dusty, 3,600-foot-long airstrip in Rajasthan, India, a two-seater white Cessna 152 pivots into position. A few moments later, it's soaring over the empty desert into a cloudless blue sky.</p>
              <p>Thu, 22 Nov 2018 02:43:51 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Ancient termite megapolis as large as Britain found</h3>
              <p>Researchers have discovered a gigantic complex of 200 million termite mounds in northeastern Brazil, which may be up to 4,000 years old and covers an area about the size of Great Britain.</p>
              <p>Wed, 21 Nov 2018 12:19:45 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Travel deals for Black Friday and Cyber Monday</h3>
              <p>Sure, Thanksgiving is a time to give thanks. But the extended holiday weekend also is a time for some serious retail therapy, especially on discounted travel.</p>
              <p>Fri, 23 Nov 2018 01:29:06 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>This Alaskan town won't see the sun for 65 days</h3>
              <p>If you're a night owl, you may want to consider spending your winters in northern Alaska.</p>
              <p>Tue, 20 Nov 2018 21:37:11 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Airline etiquette: Tips from an expert </h3>
              <p>I was sitting in an aisle seat on a flight earlier this year when a fellow traveler approached and politely said he thought I may be sitting in his seat.</p>
              <p>Mon, 19 Nov 2018 11:10:20 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>India's first woman with a Michelin star</h3>
              <p>Chef Garima Arora just became the first Indian woman to win a Michelin star.</p>
              <p>Fri, 16 Nov 2018 11:07:32 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>New Zealand asks travelers to pledge a 'Tiaki Promise' </h3>
              <p>New Zealand is known for its strict environmental rules and regulations.</p>
              <p>Sat, 17 Nov 2018 00:57:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Eat your way through Mexico City's largest market</h3>
              <p>Mexico City's love affair with food is all-encompassing, and no trip is complete without a thorough food tour of Mercado de la Merced, the city's largest market and one of its oldest.</p>
              <p>Thu, 15 Nov 2018 04:10:21 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Go glamping with Hello Kitty in Japan</h3>
              <p>Hello Kitty is one of Japan's most popular -- and definitely most adorable -- exports.</p>
              <p>Mon, 19 Nov 2018 01:16:53 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>World's 'most excellent' airline named</h3>
              <p>Air New Zealand gets regular kudos for innovating everything from in-flight services to safety videos, its funky films featuring Hobbits and other famous Kiwis.</p>
              <p>Mon, 06 Nov 2017 10:40:40 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Why travelers are crashing Indian weddings</h3>
              <p>Always fantasized about attending a big blow-out India wedding, complete with days of celebration, delicious food, vibrant interiors and spectacular clothing?</p>
              <p>Wed, 14 Nov 2018 05:36:18 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Ski down the roof of this new Swiss hotel</h3>
              <p>Until now, skiing off hotel roofs has been an exploit reserved for James Bond stunt doubles and drunken fools with a penchant for plaster casts.</p>
              <p>Wed, 14 Nov 2018 12:20:29 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Bangkok's new $1.65 billion mega attraction</h3>
              <p>Pack your travel bags, grab your credit cards.</p>
              <p>Wed, 14 Nov 2018 02:28:48 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Cliff-jumping off Ireland's Atlantic coast</h3>
              <p>If someone told you to jump into an often tumultuous and always frigid North Atlantic Ocean from a 30-foot-high cliff in Ireland, would you do it?</p>
              <p>Tue, 13 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>Why some women won't eat out alone </h3>
              <p>Taking myself out to a local Japanese restaurant for dinner shouldn't have been a big deal, but it became one before I even picked up my chopsticks.</p>
              <p>Thu, 15 Nov 2018 16:01:15 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>The coldest Thanksgiving in over a century for millions</h3>
              <p>Tranquil weather will accompany most Americans heading to a loved one's dinner table for Thanksgiving. But they might feel a little heartburn on the return home Saturday and Sunday, given the traffic congestion and dicey conditions in the forecast. Check out the forecast for the long Thanksgiving holiday.</p>
              <p>Tue, 13 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>New Zealand's North and South Islands moving closer together</h3>
              <p>New Zealand's North and South Islands are moving closer together after a series of earthquakes in 2016 that lifted the sea floor, the country's geology body has said.</p>
              <p>Tue, 20 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>25 gifts travelers will actually want</h3>
              <p>The true traveler wants things that are either necessary or chic -- or both. So check out our guide of 25 fantastic gifts for every traveler on your list.</p>
              <p>Tue, 20 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>31 beautiful reasons to visit England</h3>
              <p>Discover England's most beautiful places. From the wild North York Moors to the ancient Roman sites in Bath, you be enchanted by scenes natural and man-made.</p>
              <p>Thu, 22 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>The 32 most beautiful places to visit in Ireland</h3>
              <p>From the dramatic Cliffs of Moher to regal Powerscourt Estate in Wicklow, escape to 32 of the most beautiful places to visit in Ireland.</p>
              <p>Thu, 22 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        <li>
              <h3>30 of India's most beautiful places</h3>
              <p>India is a land of bountiful landscapes from stunning lakes, rolling plains and the snow-capped Himalayas to buildings of worldwide acclaim. See 30 of India's most beautiful places.</p>
              <p>Tue, 27 Nov 2018 09:55:34 GMT<button onClick={() => alert(`title \n shortText \n pubDate`)}>show article slug</button></p>
        </li>
        </li>
      ))}
      </ul>
    );
  };
  
  


ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
