// react dependencies
import React from "react";
// chakra ui components
import { Flex, Box, AspectRatio, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

import Image from 'next/image';

const albumData =
  [
    {
      title: "Victory Lap",
      songs: [
        {
          title: "Rap N",
          link: "https://www.youtube.com/embed/_4LsQ_kdLh0",
        },
        {
          title: "Victory",
          link: "https://www.youtube.com/embed/iYC9iMTC5QM"
        },
        {
          title: "Last",
          link: "https://www.youtube.com/embed/QM9xgHibvzM"
        },
        {
          title: "Young",
          link: "https://www.youtube.com/embed/3RlE03xOyV4"
        },
        {
          title: "Dedication",
          link: "https://www.youtube.com/embed/RXmfYM6dSFg"
        },
        {
          title: "Blue",
          link: "https://www.youtube.com/embed/r5ujo7icpH8"
        },
        {
          title: "Hussle",
          link: "https://www.youtube.com/embed/lxcrBGUYnxA"
        },
        {
          title: "Status",
          link: "https://www.youtube.com/embed/LAJkL4dZpzk"
        },
        {
          title: "Succa",
          link: "https://www.youtube.com/embed/rQEuF5QI0Q8"
        },
        {
          title: "Keys",
          link: "https://www.youtube.com/embed/eBYvq8CyNrA"
        },
        {
          title: "grinding",
          link: "https://www.youtube.com/embed/AVrNHI4RdPM"
        },
        {
          title: "million",
          link: "https://www.youtube.com/embed/5EDC_dAAqD0"
        },
        {
          title: "loaded",
          link: "https://www.youtube.com/embed/CTyRUel1xFY"
        },
        {
          title: "realbig",
          link: "https://www.youtube.com/embed/ZyGojDe_DI0"
        },
        {
          title: "doubleUp",
          link: "https://www.youtube.com/embed/pwBFOuCrdr4"
        },
        {
          title: "right",
          link: "https://www.youtube.com/embed/heFh5aQjwtI"
        },
      ],
    },
    {
      title: "No Pressure",
      songs: [
        {
          title: "effortless",
          link: "https://www.youtube.com/embed/YqUrHLc0DqM"
        },
        {
          title: "stucc",
          link: "https://www.youtube.com/embed/YA60W05DJlQ"
        }
      ]
    }
  ]

function VideoPlayer({ albums }) {
  console.log(albums)
  // a default song to start with
  const defaultSong = "https://www.youtube.com/embed/_4LsQ_kdLh0"
  // set a variable random song
  const [allSongs, setAllSongs] = React.useState([]);
  const [randomSong, setRandomSong] = React.useState(defaultSong);
  // effects for the video player 
  React.useEffect(() => {
    albumData.map((album) => {
      // songs array to start for the inital component render
      let songs = [];
      // spread the album.songs into the songs array  
      songs = [...album.songs]
      // setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs
      setAllSongs(prev => [...prev, ...songs]);
      // check and see whats inside all songs
      // console.log("Samuel L. Jackson Says: This is All the Songs MuthaFucka!!!")
      // console.log(allSongs)
    })
  }, []);

  console.log({ allSongs })
  console.log({ allSongs })



  // when the components loads -- pick a random song from any album

  function pickRandomSong(randomSongs) {
    // we want to take the albumData array and pull all song arrays off of each album
    // we will need to use some array methods and go through each object -- pulling out the songs array -- and combining them into a new array
  }

  // to do this, we need to combine each songs array on the album objects 
  // const songs = // some array method that takes all songs arrays and combines them 
  return (
    <Flex direction="column">
      <Text> Video Player </Text>

      {/* {allSongs.map(song => (
        <h1>{song.title}</h1>
      ))} */}
      {/* 
      {allSongs.map(song => (
        <h1>{song.title}</h1>
      ))} */}

      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="rap"
          src={defaultSong}
          allowFullScreen
        />
      </AspectRatio>

      <Button onClick={() => pickRandomSong(songs)}>Randomize</Button>

    </Flex>
  )
}


export default function Index() {
  // victory lap album songs
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setAlbums(albumData)
    }, 8000)

  }, [])

  return (
    <Layout>
      <VideoPlayer albums={albums} />
    </Layout>
  )
}




// no pressure album songs





  // function useHandleClick() {
  //   console.log("button clicked")
  //   setVideo(randomSong());
  // }

  // function noPressureClick() {
  //   console.log("button clicked")
  //   setVideo(randomSongNP());
  // }

  // function randomSong() {
  //   // move all songs into an array
  //   const album = [rapN, victory, last, young, dedication, blue, hussle, status, succa, keys, grinding, million, loaded, realbig, doubleUp, right];

  //   let song = album[Math.floor(Math.random() * album.length)];

  //   console.log("This is the song" + song)

  //   return song
  // }

  // function randomSongNP() {
  //   // move all songs into an array
  //   const album = [Effortless, stucc];

  //   let song = album[Math.floor(Math.random() * album.length)];

  //   console.log("This is the song" + song)

  //   return song
  // }

  // React.useEffect(() => {
  //   setVideo(randomSong())
  // }, [])