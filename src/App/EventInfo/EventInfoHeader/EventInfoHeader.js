import React from "react";
import { useSelector } from "react-redux";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

const { Header } = Card;

const { Title, Icon } = Header;

export default function EventMenu() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { title } = selectedEvent;
  return (
    <Header>
      <Title>{title}</Title>
      <Icon>
        <Button color='primary'>All Invitees : 50</Button>
      </Icon>
    </Header>
  );
}