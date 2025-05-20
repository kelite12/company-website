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
def quick_sort(arr):
    """
    快速排序算法实现
    参数:
        arr: 待排序的列表，可以包含数字或字符串
    返回:
        排序后的列表
    异常处理:
        - 输入类型错误：当输入不是列表类型时抛出TypeError
        - 元素类型错误：当列表包含不可比较的元素时抛出TypeError
    """
    try:
        # 验证输入类型
        if not isinstance(arr, list):
            raise TypeError("输入必须是列表类型")
        
        # 基本情况：空列表或单元素列表直接返回
        if len(arr) <= 1:
            return arr
            
        # 验证所有元素是否可比较
        for x in arr:
            if not isinstance(x, (int, float, str)):
                raise TypeError(f"列表元素类型错误: {type(x)}")
                
        # 选择基准值并分区
        pivot = arr[len(arr) // 2]  # 使用中间元素作为基准值
        left = [x for x in arr if x < pivot]  # 存储小于基准值的元素
        middle = [x for x in arr if x == pivot]  # 存储等于基准值的元素
        right = [x for x in arr if x > pivot]  # 存储大于基准值的元素
        
        # 递归处理并合并结果
        return quick_sort(left) + middle + quick_sort(right)
        
    except TypeError as e:
        print(f"类型错误: {str(e)}")
        return arr
    except Exception as e:
        print(f"发生错误: {str(e)}")
        return arr

# 测试代码
if __name__ == "__main__":
    # 测试用例1：随机数字列表
    test_list1 = [64, 34, 25, 12, 22, 11, 90]
    print("测试用例1 - 原始列表:", test_list1)
    sorted_list1 = quick_sort(test_list1)
    print("测试用例1 - 排序后:", sorted_list1)
    
    # 测试用例2：包含重复元素的数字列表
    test_list2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    print("\n测试用例2 - 原始列表:", test_list2)
    sorted_list2 = quick_sort(test_list2)
    print("测试用例2 - 排序后:", sorted_list2)
    
    # 测试用例3：已排序的数字列表
    test_list3 = [1, 2, 3, 4, 5]
    print("\n测试用例3 - 原始列表:", test_list3)
    sorted_list3 = quick_sort(test_list3)
    print("测试用例3 - 排序后:", sorted_list3)
    
    # 测试用例4：空列表
    test_list4 = []
    print("\n测试用例4 - 原始列表:", test_list4)
    sorted_list4 = quick_sort(test_list4)
    print("测试用例4 - 排序后:", sorted_list4)
    
    # 测试用例5：字符串列表
    test_list5 = ["banana", "apple", "cherry", "date"]
    print("\n测试用例5 - 原始列表:", test_list5)
    sorted_list5 = quick_sort(test_list5)
    print("测试用例5 - 排序后:", sorted_list5)
    
    # 测试用例6：错误处理 - 非列表类型输入
    test_list6 = "not a list"
    print("\n测试用例6 - 原始输入:", test_list6)
    sorted_list6 = quick_sort(test_list6)
    print("测试用例6 - 处理结果:", sorted_list6)
    
    # 测试用例7：包含负数和浮点数的列表
    test_list7 = [-5, 3.14, -2.5, 0, 1.5]
    print("\n测试用例7 - 原始列表:", test_list7)
    sorted_list7 = quick_sort(test_list7)
    print("测试用例7 - 排序后:", sorted_list7)
    
    # 测试用例8：包含None值的列表
    test_list8 = [1, None, 3, 2, None]
    print("\n测试用例8 - 原始列表:", test_list8)
    sorted_list8 = quick_sort(test_list8)
    print("测试用例8 - 排序后:", sorted_list8)
    
    # 测试用例9：包含Unicode字符的字符串列表
    test_list9 = ["你好", "世界", "Python", "编程"]
    print("\n测试用例9 - 原始列表:", test_list9)
    sorted_list9 = quick_sort(test_list9)
    print("测试用例9 - 排序后:", sorted_list9)
