# TestNavigation
Repo created just to show the bug in @react-navigation/stack lib

In App.tsx there are 2 components, which're contain the call of the standart system modal (Android check geolocation).

In FocusEffectScreen it's called inside of useFocusEffect, in UseEffectScreen inside of useEffect.
Both notifications are triggered when Home page is still displayed.

Versions:

* "@react-navigation/stack": "6.3.17"

* "react-native": "0.72.4",


! Not a bug, according the documentation: https://reactnavigation.org/docs/use-focus-effect/#delaying-effect-until-transition-finishes
