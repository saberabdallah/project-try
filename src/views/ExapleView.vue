
<template>
  <body>
    
    <div class=" container">

      <div class="mt-5  p-5 border " >

        <button class=" btn btn-primary mb-3" @click="state = !state"> {{ state ? " Hide Message" : " Show Message" }} </button>

        <Transition name="slide-fade">
        <div class=" text-center" v-show="state"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat 
          blanditiis dicta perferendis explicabo quo odit <br> cupiditate beatae, 
          dolorum fuga ab ratione inventore dolorem sint! Maxime 
          quia quos quisquam error ducimus?
        </div>
        </Transition>

      </div>


    </div>

  </body>
</template>

<script>
import { ref } from "vue";


export default {

setup() {

  //data

  const state = ref (true);


  //funcation 

  return {
    state
  }

}
}
</script>

<style scoped>

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>


...................................................................................................................

<!-- مراقبة النص للكتابة باللغة  انجليزي فقط وعرض رسالة في حالة سليم او غير سليم -->

 
<!-- <template>

  <div class="container">

    <h1>english Validation</h1>

    <input
      type="text"
      v-model="username"
      placeholder="Enter English text only"
      class="input"
    />

    <p class="message">
      {{ message }}
    </p>

  </div>

</template>

<script>

import { ref, watch } from 'vue';

export default {

  setup() {

    const username = ref('');

    const message = ref('');

    watch(username, (newValue) => {

      // التحقق هل النص انجليزي
      const englishPattern = /^[A-Za-z\s]+$/;

      if (newValue === '') {

        message.value = '';

      } else if (englishPattern.test(newValue)) {

        message.value = 'تمت الكتابة باالانجليزي';

      } else {

        message.value = 'الرجاء الكتابة باالانجليزي  فقط';

      }

    });

    return {
      username,
      message
    };
  }
};

</script>

<style scoped>

.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  font-family: Arial;
  text-align: center;
}

.input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.message {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

</style> -->







<!-- ................................................................................................................... -->


<!-- مراقبة النص للكتابة باللغة العربية فقط وعرض رسالة في حالة سليم او غير سليم -->

<!-- <template>

  <div class="container">

    <h1>Arabic Validation</h1>

    <input
      type="text"
      v-model="username"
      placeholder="اكتب بالعربية فقط"
      class="input"
    />

    <p class="message">
      {{ message }}
    </p>

  </div>

</template>

<script>

import { ref, watch } from 'vue';

export default {

  setup() {

    const username = ref('');

    const message = ref('');

    watch(username, (newValue) => {

      // التحقق هل النص عربي
      const arabicPattern = /^[\u0600-\u06FF\s]+$/;

      if (newValue === '') {

        message.value = '';

      } else if (arabicPattern.test(newValue)) {

        message.value = 'تمت الكتابة بالعربية';

      } else {

        message.value = 'الرجاء الكتابة بالعربية فقط';

      }

    });

    return {
      username,
      message
    };
  }
};

</script>

<style scoped>

.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  font-family: Arial;
  text-align: center;
}

.input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.message {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

</style> -->




<!-- ................................................................................................. -->

//مراقبة اليوزر عند الكتابة وعرض رسالة في حالة سليم او غير سليم


<!-- <template>

  <div class="container">

    <h4>Username Validation</h4>

    <input
      type="text"
      v-model="username"
      placeholder="Enter Username"
      class="input"
    />

    <p class="message">
      {{ message }}
    </p>

  </div>

</template>

<script>

import { ref, watch } from 'vue';

export default {

  setup() {

    // اسم المستخدم
    const username = ref('');

    // الرسالة
    const message = ref('');

    // مراقبة username
    watch(username, (newValue) => {

      if (newValue.length < 3) {

        message.value = 'Username is too short';

      } else {

        message.value = 'Username looks good';

      }

    });

    return {
      username,
      message
    };
  }
};

</script>

<style scoped>

.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  font-family: Arial;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.message {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

</style> -->






<!-- ................................................................................................. -->


// عمل فلترة على ليسته 

<!-- <template>
  <div class="container">

    <h1>Products</h1>

    <input
      type="text"
      v-model="search"
      placeholder="Search Product..."
      class="search-input"
    />

    <ul class="product-list">

      <li
        v-for="product in filteredProducts"
        :key="product"
        class="product-item"
      >
        {{ product }}
      </li>

    </ul>

  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {

  setup() {

    // المنتجات
    const products = ref([
      'Laptop',
      'Phone',
      'Keyboard',
      'Mouse',
      'Monitor'
    ]);

    // قيمة البحث
    const search = ref('');

    // الفلترة
    const filteredProducts = computed(() => {

      return products.value.filter((product) => {

        return product
          .toLowerCase()
          .includes(search.value.toLowerCase());

      });

    });

    return {
      products,
      search,
      filteredProducts
    };
  }
};
</script>

<style scoped>

.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.search-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  outline: none;
}

.search-input:focus {
  border-color: #42b983;
}

.product-list {
  list-style: none;
  padding: 0;
}

.product-item {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
}

.product-item:hover {
  background: #42b983;
  color: white;
}

</style> -->







<!-- ................................................................................................. -->


// ععمل عداد يحسب الحروف التي تنكتب ويعمل لها رينج معيين


<!-- 
<template>
  
  <div class="container">
    <h4>write your message ({{ maxlength }} charectrs)</h4>

    <div>
    <textarea name="" id="" v-model="message" @input="countchracters" :maxlength="maxlength"> </textarea>
      <span class=" count" :class="state ? 'text-danger' : ''"> | {{ count }} </span>
    </div>

  </div>
</template>

<script setup>
  import {ref} from "vue";

  // data
  const maxlength = ref(20);
  const message = ref("");
  const count = ref(0);
  const state = ref(false)

  // method
  const countchracters = ()=> {

    count.value = maxlength.value - message.value.length;
    state.value = count.value === 0;
  }


</script>

<style scoped>

  textarea {
    width: 60%;
    height: 150px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }

</style> -->





<!-- ................................................................................................. -->

// اخفاء واظهار الجواب 

<!-- <template>
  <div class="container">
    <div class="qustion-box" v-for="qustion in qustions" :key="qustion.id">
      <h3 class="qustion" @click="qustion.open = !qustion.open">{{ qustion.id }}) {{ qustion.title }}</h3>
      <p class="answer" v-if="qustion.open">{{ qustion.answer }} <span class="fs-4 fw-bold"> {{ qustion.open }}</span> </p>
      <hr>
      <br>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//state
const qustions = ref({

 qustion1: { id: 1, title: "saber?", answer:'hahahahaah', open:false },
 qustion2: { id: 2, title: "omar?", answer:'khaled', open:false },
 qustion3: { id: 3, title: "blabalblabblabla?", answer:'hahahahaah', open:false },
 qustion4: { id: 4, title: "blabalblabblabla?", answer:'hahahahaah', open:false },
 qustion5: { id: 5, title: "blabalblabblabla?", answer:'hahahahaah', open:false },
 qustion6: { id: 5, title: "blabalblabblabla?", answer:'hahahahaah', open:false },
 qustion7: { id: 6, title: "blabalblabblabla?", answer:'hahahahaah', open:false },
});
</script>

<style scoped> 
.qustion {
  cursor: pointer;
}

</style> -->






<!-- ................................................................................................. -->


// Add task list

<!-- <template> -->
<!-- <div class="container py-4 mt-5">
    <form action="" class="py-5 text-center">
      <label class="me-2">enter the name :</label>
      <input class="py-2 px-3 me-2" type="text" v-model="NfoodText" />
      <label class="me-2"> enter the price :</label>
      <input class="py-2 px-3" type="text" v-model="price" />
      <button class="btn btn-primary mx-4" @click.prevent="addfood"  :disabled="!NfoodText || !price ">
        Add FOOD
      </button>
      <button class="btn btn-primary mx-4" @click.prevent="dellAll" v-if="foods.length > 1">Delet All</button>
    </form>

    <div class="task-list" v-for="(food,index) in foods" :key="food.index"> -->
<!-- <div class="task-box" @click="food.done= !food.done" :style="{'textDecoration' : food.done ? 'line-through' : ''}"> -->
<!-- <div class="task-box" @click="food.done = !food.done" :class="food.done ? 'done' : '' "> -->
<!-- ID: {{ food.id }} || name: {{ food.Name }} || price: {{ food.price }} || 
      </div>
      <span class="btn btn-primary btndel1" @click="dellFood(index)">
        delet</span 
      >
    </div>
  </div>
</template> -->

<!-- <script setup>
import { ref } from "vue";


//state
const foods = ref([]);
const NfoodText = ref("");
const price = ref("");

//method
const addfood = () => {
  foods.value.push({
    id: Date.now(),
    Name: NfoodText.value,
    price: price.value,
    done: false,
  });
  NfoodText.value = "";
  price.value = "";
};

const dellFood = (id) => {
  foods.value.splice(id, 1);
};

const dellAll = () => {
  foods.value =[]
};
</script>

<style scoped>
.container {
  background-color: rgba(197, 193, 140, 0.282);
}

 label {
  font-size: 19px;
    font-weight: bold;
 }

.task-list {
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 30px;
  padding: 20px;
  width: 700px;
  background-color: #442f2f5e;
  border-radius: 8px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.task-list div {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

}

.task-list div.done {

/* border-bottom: 2px solid red; */
text-decoration: line-through;
}


.btndel1 {
  margin-left: auto;
}
</style> -->
