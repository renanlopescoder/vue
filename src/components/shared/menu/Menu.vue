<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">
                <b-img
                    :src="require('../../../assets//logo.png')"
                    width="30"
                    height="30"
                    alt="Vue logo"
                ></b-img>
                Clash Royale
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown>
                        <template v-slot:button-content>
                            <em>Projects</em>
                        </template>
                        <b-dropdown-item :to="{ name: 'home' }"
                            >Projects</b-dropdown-item
                        >
                        <b-dropdown-item :to="{ name: 'newProject' }"
                            >Register</b-dropdown-item
                        >
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown>
                        <template v-slot:button-content>
                            <em>Clash Royale</em>
                        </template>

                        <b-dropdown-item :to="{ name: 'randomDeck' }"
                            >Generate Deck</b-dropdown-item
                        >
                        <b-dropdown-item :to="{ name: 'arenas' }"
                            >Arenas</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
