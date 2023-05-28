<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Add Student
                    <NuxtLink class="btn btn-danger float-end" to="/">Back</NuxtLink>
                </h4>
            </div>
            {{ this.errorList }}
            <div v-if="isLoading" class="p-3">
                <Loading :title="isLoadingTitle" />
            </div>
            <div v-else>
                <form @submit.prevent="saveStudent">
                    <div class="card-body">
                        <div class="mb-3">
                            <label>Name</label>
                            <input type="text" v-model="student.name" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Course</label>
                            <input type="text" v-model="student.course" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Email</label>
                            <input type="text" v-model="student.email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Phone</label>
                            <input type="text" v-model="student.phone" class="form-control">
                        </div>

                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'studentsCreate',
    data() {
        return {
            student: {
                name: '',
                course: '',
                email: '',
                phone: ''
            },
            isLoading: false,
            isLoadingTitle: 'Loading...',
            errorList: {}
        }
    },
    methods: {
        saveStudent() {
            this.isLoading = true
            this.isLoadingTitle = "Saving..."
            var myThis = this

            axios.post(`http://localhost:8000/api/students`, this.student).then(res => {
                console.log(res, 'res')
                alert(res.data.success)

                this.student.name = ''
                this.student.course = ''
                this.student.email = ''
                this.student.phone = ''
                this.isLoading = false
                this.isLoadingTitle = "Loading"
            })
                .catch(function (error) {
                    console.log(error, 'errors')
                    if (error.response.status == 422) {
                        myThis.errorList = error.response.data.message
                        this.isLoading = false
                    }
                })
        }
    }
}
</script>