package com.example.viatabloid.Models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StoryTest {

    @Test
    void getDescription() {
        Story story = new Story();
        story.setDescription("Test Description");


        String description = story.getDescription();


        assertEquals("Test Description", description);
    }

    @Test
    void setDescription() {

        Story story = new Story();


        story.setDescription("New Test Description");

        assertEquals("New Test Description", story.getDescription());
    }
}