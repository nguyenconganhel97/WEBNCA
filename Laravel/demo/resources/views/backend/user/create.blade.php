<h2>User Form</h2>

<form action='{{route("backend.user.store")}}' method = "post">
    @csrf
    <input type="text" name="fullname" placeholder="fullname" >
    <br>
    <input type="email" name="email" placeholder="email" >
    <br>
    <input type="password" name="password" placeholder="password" >
    <button type="submit">Register</button>
</form>