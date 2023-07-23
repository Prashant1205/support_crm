<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">phone</th>
      <th scope="col">upi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="alldat in alldata">
      <th scope="row">1</th>
      <td>{{alldat.name}}</td>
      <td>{{alldat.phone}}</td>
      <td>{{alldat.utr_upi}}</td>
    </tr>
    
  </tbody>
</table>
</template>


<script>
    export default {
        data(){
            return {
                alldata : [],
               
            }
        },
        created(){
            this.getData();
        },

        methods: {
            getData(){
                this.$http.get("auth/callbackdata").then(response => {this.alldata = response.data.alldata})


            }
        }
    }
</script>
