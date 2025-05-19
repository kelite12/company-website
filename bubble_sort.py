def bubble_sort(arr):
    """
    冒泡排序函数
    参数:
        arr: 需要排序的列表
    返回:
        排序后的列表
    """
    n = len(arr)
    # 外层循环控制需要比较的轮数
    for i in range(n):
        # 内层循环控制每轮比较的次数
        # 每轮结束后，最大的数已经在最后，所以不需要再比较
        for j in range(0, n - i - 1):
            # 如果前面的数大于后面的数，则交换它们的位置
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 测试代码
if __name__ == "__main__":
    # 测试用例
    test_list = [90, 80, 10, 97, 76, 66]
    print("原始列表:", test_list)
    
    sorted_list = bubble_sort(test_list)
    print("排序后的列表:", sorted_list) 

    test_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print("原始列表:", test_list)
    
    sorted_list = bubble_sort(test_list)
    print("排序后的列表:", sorted_list) 

