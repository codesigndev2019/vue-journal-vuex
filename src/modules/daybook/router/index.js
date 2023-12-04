export default {
  name: "daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/DayBookLayouts.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-nentry-view" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
  ],
};
