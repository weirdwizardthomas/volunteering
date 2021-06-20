import rest_framework.routers


class CustomRouter(rest_framework.routers.DefaultRouter):
    #  todo use https://stackoverflow.com/questions/13252333/check-if-all-elements-of-a-list-are-of-the-same-type
    def register_multiple(self, routes: dict):
        for route, viewset in routes.items():
            self.register(route, viewset)
        return self
