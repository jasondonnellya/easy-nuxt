<template>
      <div class="navbar-item has-dropdown is-hoverable">
        <NavbarLink>
            <slot name="title"></slot>
        </NavbarLink>

        <div class="navbar-dropdown">
            <slot name="content"></slot>
        </div>
      </div>
</template>