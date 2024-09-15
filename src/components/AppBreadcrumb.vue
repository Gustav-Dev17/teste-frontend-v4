<template>
  <CBreadcrumb class="my-0">
    <CBreadcrumbItem v-for="item in breadcrumbs" :key="item.path" :href="item.active ? '' : item.path"
      :active="item.active">
      {{ item.name }}
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute, RouteLocationMatched } from 'vue-router';

const breadcrumbs = ref<{ active: boolean; name: string; path: string }[]>([]);
const router = useRouter();
const route = useRoute();

const getBreadcrumbs = () => {
  return route.matched.map((route: RouteLocationMatched) => {
    return {
      active: route.path === router.currentRoute.value.fullPath,
      name: route.name as string,
      path: `${router.options.history.base}${route.path}`,
    };
  });
};

router.afterEach(() => {
  breadcrumbs.value = getBreadcrumbs();
});

onMounted(() => {
  breadcrumbs.value = getBreadcrumbs();
});
</script>
