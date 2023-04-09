def enough(cap, on, wait):
    return max(0, wait - (cap - on))
  
def enough(cap, on, wait):
    return 0 if on + wait <= cap else on + wait - cap
