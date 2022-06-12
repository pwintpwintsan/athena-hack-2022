// List.js
import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { ShelterSingleScreenNavName } from "../screens/ShelterSingleScreen";
import { ShelterSingleScreen2NavName } from "../screens/ShelterSingleScreen2";
import ListingCard from "./ListingCard";

const data = [
  {
    name: "3 bed shared room...",
    people: "3 people",
    details: "London, United Kingdom",
    navScreenName: ShelterSingleScreenNavName,
  },
  {
    name: "2 bed flat",
    people: "6 people",
    details: "Budapest, Hungary",
    navScreenName: ShelterSingleScreen2NavName,
  },
  {
    name: "Spare room",
    people: "1-2 people",
    details: "Berlin, Germany",
    navScreenName: ShelterSingleScreen2NavName,
  },
  {
    name: "Spare room",
    people: "1 person",
    details: "Rome, Italy",
    navScreenName: ShelterSingleScreen2NavName,
  },
];

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, people, navScreenName }) => (
  <ListingCard
    title={name}
    people={people}
    location={details}
    navScreenName={navScreenName}
  />
);

// the filter
const List = ({ searchPhrase, setClicked }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (
      item.details
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
