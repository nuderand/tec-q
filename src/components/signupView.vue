<template>
  <div class="container">
    <div class="l_signupbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info">
        <div class="panel-heading">Sign Up</div>
        <div class="panel-body">
          <form class="l_singupbox_form form-horizontal" role="form">

            <div class="form-group">
              <label for="email" class="col-md-3">Email</label>
              <div class="col-md-9">
                <input type="text" class="form-control" name="email" placeholder="Email Address">
              </div>
            </div>

            <div class="form-group">
              <label for="password" class="col-md-3">Password</label>
              <div class="col-md-9">
                <input type="password" class="form-control" name="password" placeholder="Password">
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-offset-3 col-md-9">
                <button class="l_signupbox_button btn btn-info">Sign Up</button>
              </div>
            </div>

          </form>
        </div>
      </div><!-- /.panel -->
    </div><!-- /. l_signupbox -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  name: 'signupView'
}
</script>

