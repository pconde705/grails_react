package react_test

class UserController {

    def create() {
      def user = new User(params)
      user.save()
    }
}
